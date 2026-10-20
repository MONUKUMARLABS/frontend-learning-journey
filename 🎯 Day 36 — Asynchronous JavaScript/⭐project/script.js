let users = [];

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

const loadButton =
    document.getElementById("loadButton");

const refreshButton =
    document.getElementById("refreshButton");

const searchInput =
    document.getElementById("search");

const usersContainer =
    document.getElementById("usersContainer");

const error =
    document.getElementById("error");

function renderUsers(usersToDisplay) {
    usersContainer.innerHTML = "";

    if (usersToDisplay.length === 0) {
        usersContainer.innerHTML =
            "<p>No students found.</p>";

        return;
    }

    usersToDisplay.forEach((user, index) => {
        const card =
            document.createElement("div");

        card.className = "student-card";

        const title =
            document.createElement("h3");

        title.textContent =
            `Student ${index + 1}`;

        const name =
            document.createElement("p");

        name.textContent =
            `Name: ${user.name}`;

        const email =
            document.createElement("p");

        email.textContent =
            `Email: ${user.email}`;

        card.append(title, name, email);

        usersContainer.appendChild(card);
    });
}

async function loadStudents() {
    usersContainer.innerHTML =
        "<p>Loading...</p>";

    error.textContent = "";

    loadButton.disabled = true;
    refreshButton.disabled = true;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const apiUsers =
            await response.json();

        users = apiUsers.map((user, index) => {
            return {
                id: user.id,
                name: indianStudents[index].name,
                email: indianStudents[index].email
            };
        });

        renderUsers(users);
    } catch (err) {
        users = [];

        usersContainer.innerHTML = "";

        error.innerHTML =
            "Unable to load users.<br>Please try again.";
    } finally {
        loadButton.disabled = false;
        refreshButton.disabled = false;
    }
}

loadButton.addEventListener("click", () => {
    loadStudents();
});

refreshButton.addEventListener("click", () => {
    loadStudents();
});

searchInput.addEventListener("input", () => {
    const searchText =
        searchInput.value.toLowerCase().trim();

    const filteredUsers = users.filter((user) => {
        return (
            user.name
                .toLowerCase()
                .includes(searchText) ||

            user.email
                .toLowerCase()
                .includes(searchText)
        );
    });

    renderUsers(filteredUsers);
});