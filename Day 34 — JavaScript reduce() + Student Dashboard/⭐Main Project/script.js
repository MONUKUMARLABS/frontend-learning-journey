let students = [];
let editingId = null;

const form = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const marksInput = document.getElementById("marks");
const searchInput = document.getElementById("search");

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

    const rankedStudents = [...students].sort(
        (first, second) => second.marks - first.marks
    );

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
        const item = document.createElement("li");

        item.textContent =
            `${student.name} — ${student.marks}`;

        topThreeList.appendChild(item);
    });
}

function renderStudents() {
    studentsContainer.innerHTML = "";

    const searchText =
        searchInput.value.toLowerCase().trim();

    const filteredStudents = students.filter(
        (student) => {
            return student.name
                .toLowerCase()
                .includes(searchText);
        }
    );

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
    renderDashboard();

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

    submitButton.textContent =
        "Update Student";

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
    renderDashboard();

    form.reset();

    editingId = null;

    submitButton.textContent =
        "Add Student";
});

searchInput.addEventListener("input", () => {
    renderStudents();
});

loadStudents();
renderStudents();
renderDashboard();