let students = [];
let editingId = null;
let activeFilter = "all";

const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const marksInput = document.getElementById("marks");
const searchInput = document.getElementById("search");
const submitButton = document.getElementById("submitButton");

const error = document.getElementById("error");
const success = document.getElementById("success");

const studentCount = document.getElementById("studentCount");
const passedCount = document.getElementById("passedCount");
const failedCount = document.getElementById("failedCount");
const averageMarks = document.getElementById("averageMarks");

const studentsContainer =
    document.getElementById("studentsContainer");

const filterButtons =
    document.querySelectorAll(".filter-button");

function saveStudents() {
    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

function loadStudents() {
    const savedStudents =
        localStorage.getItem("students");

    if (savedStudents) {
        students = JSON.parse(savedStudents);
    }
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

function updateStatistics() {
    const passed = students.filter(
        (student) => student.marks >= 40
    );

    const failed = students.filter(
        (student) => student.marks < 40
    );

    const totalMarks = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    const average =
        students.length > 0
            ? totalMarks / students.length
            : 0;

    studentCount.textContent = students.length;
    passedCount.textContent = passed.length;
    failedCount.textContent = failed.length;
    averageMarks.textContent = average.toFixed(1);
}

function getFilteredStudents() {
    const searchText =
        searchInput.value.toLowerCase().trim();

    return students.filter((student) => {
        const nameMatches =
            student.name
                .toLowerCase()
                .includes(searchText);

        const statusMatches =
            activeFilter === "all" ||
            (
                activeFilter === "passed" &&
                student.marks >= 40
            ) ||
            (
                activeFilter === "failed" &&
                student.marks < 40
            );

        return nameMatches && statusMatches;
    });
}

function renderStudents() {
    studentsContainer.innerHTML = "";

    updateStatistics();

    const filteredStudents = getFilteredStudents();

    if (filteredStudents.length === 0) {
        studentsContainer.textContent =
            "No students found.";
        return;
    }

    filteredStudents.forEach((student) => {
        const result = getResult(student.marks);
        const grade = getGrade(student.marks);

        studentsContainer.innerHTML += `
            <div class="student-card">
                <h3>${student.name}</h3>

                <p>Email: ${student.email}</p>
                <p>Marks: ${student.marks}</p>
                <p>Result: ${result}</p>
                <p>Grade: ${grade}</p>

                <div class="actions">
                    <button
                        type="button"
                        onclick="editStudent(${student.id})">
                        Edit
                    </button>

                    <button
                        class="delete-button"
                        type="button"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </div>
            </div>
        `;
    });
}

function deleteStudent(id) {
    students = students.filter(
        (student) => student.id !== id
    );

    saveStudents();
    renderStudents();

    success.textContent =
        "Student deleted successfully!";
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

    submitButton.textContent = "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    error.textContent = "";
    success.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const marksValue = marksInput.value.trim();

    if (name === "") {
        error.textContent = "Name is required";
        return;
    }

    if (!email.includes("@")) {
        error.textContent =
            "Please enter a valid email";
        return;
    }

    if (marksValue === "") {
        error.textContent = "Marks are required";
        return;
    }

    const marks = Number(marksValue);

    if (marks < 0 || marks > 100) {
        error.textContent =
            "Marks must be between 0 and 100";
        return;
    }

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
    renderStudents();

    form.reset();
    editingId = null;
    submitButton.textContent = "Add Student";
});

searchInput.addEventListener("input", () => {
    renderStudents();
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;

        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        renderStudents();
    });
});

loadStudents();
renderStudents();