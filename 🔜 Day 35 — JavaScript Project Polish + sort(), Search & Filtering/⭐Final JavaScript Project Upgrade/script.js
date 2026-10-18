let students = [];
let editingId = null;

const form = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const marksInput = document.getElementById("marks");

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");

const submitButton =
    document.getElementById("submitButton");

const error = document.getElementById("error");
const success = document.getElementById("success");

const studentsContainer =
    document.getElementById("studentsContainer");

const totalStudents =
    document.getElementById("totalStudents");

const passedStudents =
    document.getElementById("passedStudents");

const failedStudents =
    document.getElementById("failedStudents");

const averageMarks =
    document.getElementById("averageMarks");

const highestMarks =
    document.getElementById("highestMarks");

const lowestMarks =
    document.getElementById("lowestMarks");

const topStudent =
    document.getElementById("topStudent");

const topThreeList =
    document.getElementById("topThreeList");

function saveStudents() {
    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

function loadStudents() {
    const savedStudents =
        localStorage.getItem("students");

    if (!savedStudents) {
        return;
    }

    try {
        const parsedStudents =
            JSON.parse(savedStudents);

        students = Array.isArray(parsedStudents)
            ? parsedStudents
            : [];
    } catch {
        students = [];
    }
}

function validateStudent(name, email, marksValue) {
    if (name === "") {
        return "Name is required.";
    }

    if (!email.includes("@")) {
        return "Please enter a valid email.";
    }

    if (marksValue === "") {
        return "Marks are required.";
    }

    const marks = Number(marksValue);

    if (marks < 0 || marks > 100) {
        return "Marks must be between 0 and 100.";
    }

    return null;
}

function getResult(marks) {
    return marks >= 40 ? "Pass" : "Fail";
}

function getGrade(marks) {
    if (marks >= 90) return "A+";
    if (marks >= 75) return "A";
    if (marks >= 60) return "B";
    if (marks >= 40) return "C";

    return "F";
}

function calculateStatistics() {
    const total = students.length;

    if (total === 0) {
        return {
            total: 0,
            passed: 0,
            failed: 0,
            average: 0,
            highest: null,
            lowest: null,
            topStudent: null,
            topThree: []
        };
    }

    const passed = students.filter(
        (student) => student.marks >= 40
    );

    const totalMarks = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    const rankedStudents = [...students]
        .sort((a, b) => b.marks - a.marks);

    return {
        total,
        passed: passed.length,
        failed: total - passed.length,
        average: totalMarks / total,
        highest: rankedStudents[0].marks,
        lowest: rankedStudents[rankedStudents.length - 1].marks,
        topStudent: rankedStudents[0],
        topThree: rankedStudents.slice(0, 3)
    };
}

function renderDashboard() {
    const statistics = calculateStatistics();

    totalStudents.textContent = statistics.total;
    passedStudents.textContent = statistics.passed;
    failedStudents.textContent = statistics.failed;

    averageMarks.textContent =
        statistics.average.toFixed(2);

    highestMarks.textContent =
        statistics.highest ?? "-";

    lowestMarks.textContent =
        statistics.lowest ?? "-";

    topStudent.textContent =
        statistics.topStudent
            ? `${statistics.topStudent.name} — ${statistics.topStudent.marks}`
            : "-";

    topThreeList.innerHTML = "";

    statistics.topThree.forEach((student) => {
        const listItem =
            document.createElement("li");

        listItem.textContent =
            `${student.name} — ${student.marks}`;

        topThreeList.appendChild(listItem);
    });
}

function sortStudents(list) {
    const sortedStudents = [...list];

    if (sortSelect.value === "marks-desc") {
        return sortedStudents.sort(
            (a, b) => b.marks - a.marks
        );
    }

    if (sortSelect.value === "marks-asc") {
        return sortedStudents.sort(
            (a, b) => a.marks - b.marks
        );
    }

    if (sortSelect.value === "name-asc") {
        return sortedStudents.sort(
            (a, b) => a.name.localeCompare(b.name)
        );
    }

    return sortedStudents.sort(
        (a, b) => b.name.localeCompare(a.name)
    );
}

function getVisibleStudents() {
    const searchText =
        searchInput.value.toLowerCase().trim();

    const filteredStudents = students.filter(
        (student) => {
            const searchMatches =
                student.name
                    .toLowerCase()
                    .includes(searchText) ||
                student.email
                    .toLowerCase()
                    .includes(searchText);

            const filterMatches =
                filterSelect.value === "all" ||
                (
                    filterSelect.value === "passed" &&
                    student.marks >= 40
                ) ||
                (
                    filterSelect.value === "failed" &&
                    student.marks < 40
                );

            return searchMatches && filterMatches;
        }
    );

    return sortStudents(filteredStudents);
}

function renderStudents() {
    studentsContainer.innerHTML = "";

    const visibleStudents = getVisibleStudents();

    if (visibleStudents.length === 0) {
        studentsContainer.innerHTML =
            "<p>No students found.</p>";

        return;
    }

    visibleStudents.forEach((student) => {
        const card =
            document.createElement("div");

        card.className = "student-card";

        const title =
            document.createElement("h3");

        title.textContent = student.name;

        const email =
            document.createElement("p");

        email.textContent =
            `Email: ${student.email}`;

        const marks =
            document.createElement("p");

        marks.textContent =
            `Marks: ${student.marks}`;

        const result =
            document.createElement("p");

        result.textContent =
            `Result: ${getResult(student.marks)}`;

        const grade =
            document.createElement("p");

        grade.textContent =
            `Grade: ${getGrade(student.marks)}`;

        const actions =
            document.createElement("div");

        actions.className = "actions";

        const editButton =
            document.createElement("button");

        editButton.textContent = "Edit";

        editButton.addEventListener("click", () => {
            editStudent(student.id);
        });

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.addEventListener("click", () => {
            deleteStudent(student.id);
        });

        actions.append(editButton, deleteButton);

        card.append(
            title,
            email,
            marks,
            result,
            grade,
            actions
        );

        studentsContainer.appendChild(card);
    });
}

function editStudent(id) {
    const student = students.find(
        (student) => student.id === id
    );

    if (!student) return;

    editingId = student.id;

    nameInput.value = student.name;
    emailInput.value = student.email;
    marksInput.value = student.marks;

    submitButton.textContent =
        "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function deleteStudent(id) {
    students = students.filter(
        (student) => student.id !== id
    );

    if (editingId === id) {
        form.reset();
        editingId = null;
        submitButton.textContent =
            "Add Student";
    }

    saveStudents();
    renderDashboard();
    renderStudents();

    success.textContent =
        "Student deleted successfully!";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    error.textContent = "";
    success.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const marksValue = marksInput.value.trim();

    const validationError =
        validateStudent(name, email, marksValue);

    if (validationError) {
        error.textContent = validationError;
        return;
    }

    const marks = Number(marksValue);

    if (editingId !== null) {
        const index = students.findIndex(
            (student) => student.id === editingId
        );

        students[index] = {
            ...students[index],
            name,
            email,
            marks
        };

        success.textContent =
            "Student updated successfully!";
    } else {
        students.push({
            id: Date.now(),
            name,
            email,
            marks
        });

        success.textContent =
            "Student added successfully!";
    }

    saveStudents();
    renderDashboard();
    renderStudents();

    form.reset();

    editingId = null;

    submitButton.textContent =
        "Add Student";
});

searchInput.addEventListener("input", () => {
    renderStudents();
});

filterSelect.addEventListener("change", () => {
    renderStudents();
});

sortSelect.addEventListener("change", () => {
    renderStudents();
});

loadStudents();
renderDashboard();
renderStudents();