let students = [];

const apiUrl =
    "https://jsonplaceholder.typicode.com/users";

const indianStudents = [
    {
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com"
    },
    {
        name: "Priya Verma",
        email: "priya.verma@example.com"
    },
    {
        name: "Rahul Kumar",
        email: "rahul.kumar@example.com"
    },
    {
        name: "Neha Singh",
        email: "neha.singh@example.com"
    },
    {
        name: "Rohan Gupta",
        email: "rohan.gupta@example.com"
    },
    {
        name: "Ananya Patel",
        email: "ananya.patel@example.com"
    },
    {
        name: "Vikram Yadav",
        email: "vikram.yadav@example.com"
    },
    {
        name: "Kavya Iyer",
        email: "kavya.iyer@example.com"
    },
    {
        name: "Arjun Mehta",
        email: "arjun.mehta@example.com"
    },
    {
        name: "Sneha Reddy",
        email: "sneha.reddy@example.com"
    }
];

const getButton =
    document.getElementById("getButton");

const postButton =
    document.getElementById("postButton");

const putButton =
    document.getElementById("putButton");

const deleteButton =
    document.getElementById("deleteButton");

const searchInput =
    document.getElementById("search");

const usersContainer =
    document.getElementById("usersContainer");

const apiStatus =
    document.getElementById("apiStatus");

const error =
    document.getElementById("error");

const apiResponse =
    document.getElementById("apiResponse");

function setButtonsDisabled(isDisabled) {
    getButton.disabled = isDisabled;
    postButton.disabled = isDisabled;
    putButton.disabled = isDisabled;
    deleteButton.disabled = isDisabled;
}

function renderStudents(list) {
    usersContainer.innerHTML = "";

    if (list.length === 0) {
        usersContainer.innerHTML =
            "<p>No students found.</p>";

        return;
    }

    list.forEach((student) => {
        const card =
            document.createElement("div");

        card.className = "student-card";

        const name =
            document.createElement("h3");

        name.textContent = student.name;

        const email =
            document.createElement("p");

        email.textContent = student.email;

        card.append(name, email);

        usersContainer.appendChild(card);
    });
}

async function loadStudents() {
    usersContainer.innerHTML =
        "<p>Loading...</p>";

    error.textContent = "";
    apiStatus.textContent = "";
    apiResponse.textContent = "";

    setButtonsDisabled(true);

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(
                `GET failed. Status: ${response.status}`
            );
        }

        const apiUsers =
            await response.json();

        students = apiUsers.map((user, index) => {
            return {
                id: user.id,
                name: indianStudents[index].name,
                email: indianStudents[index].email
            };
        });

        renderStudents(students);

        apiStatus.textContent =
            `GET successful. Status: ${response.status}`;

        apiResponse.textContent =
            JSON.stringify(apiUsers, null, 2);
    } catch (err) {
        students = [];

        usersContainer.innerHTML = "";

        error.textContent =
            "Unable to load students. Please try again.";
    } finally {
        setButtonsDisabled(false);
    }
}

async function testCrudApi(method) {
    error.textContent = "";
    apiStatus.textContent =
        `${method} request is running...`;

    setButtonsDisabled(true);

    let url = apiUrl;

    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (method === "POST") {
        options.body = JSON.stringify({
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com"
        });
    }

    if (method === "PUT") {
        url = `${apiUrl}/1`;

        options.body = JSON.stringify({
            id: 1,
            name: "Priya Verma",
            email: "priya.verma@example.com"
        });
    }

    if (method === "DELETE") {
        url = `${apiUrl}/1`;
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(
                `${method} failed. Status: ${response.status}`
            );
        }

        const data = await response.json();

        apiStatus.textContent =
            `${method} successful. Status: ${response.status}`;

        apiResponse.textContent =
            JSON.stringify(data, null, 2);
    } catch (err) {
        error.textContent =
            `${method} request failed. Please try again.`;
    } finally {
        setButtonsDisabled(false);
    }
}

getButton.addEventListener("click", () => {
    loadStudents();
});

postButton.addEventListener("click", () => {
    testCrudApi("POST");
});

putButton.addEventListener("click", () => {
    testCrudApi("PUT");
});

deleteButton.addEventListener("click", () => {
    testCrudApi("DELETE");
});

searchInput.addEventListener("input", () => {
    const searchText =
        searchInput.value.toLowerCase().trim();

    const filteredStudents = students.filter(
        (student) => {
            return (
                student.name
                    .toLowerCase()
                    .includes(searchText) ||

                student.email
                    .toLowerCase()
                    .includes(searchText)
            );
        }
    );

    renderStudents(filteredStudents);
});