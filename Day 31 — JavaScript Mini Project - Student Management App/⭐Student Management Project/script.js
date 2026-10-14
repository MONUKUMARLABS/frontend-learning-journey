let students = [];

const form =
    document.getElementById("studentForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const marksInput =
    document.getElementById("marks");

const error =
    document.getElementById("error");

const success =
    document.getElementById("success");

const studentsContainer =
    document.getElementById("studentsContainer");

function getResult(marks) {
    if (marks >= 40) {
        return "Pass";
    }

    return "Fail";
}

function getGrade(marks) {
    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 75) {
        return "A";
    }

    if (marks >= 60) {
        return "B";
    }

    if (marks >= 40) {
        return "C";
    }

    return "F";
}

function renderStudents() {
    studentsContainer.innerHTML = "";

    students.forEach((student) => {
        const result = getResult(student.marks);
        const grade = getGrade(student.marks);

        studentsContainer.innerHTML += `
            <div class="student-card">
                <h3>${student.name}</h3>
                <p>Email: ${student.email}</p>
                <p>Marks: ${student.marks}</p>
                <p>Result: ${result}</p>
                <p>Grade: ${grade}</p>
            </div>
        `;
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
        error.textContent = "Please enter a valid email";
        return;
    }

    if (marksValue === "") {
        error.textContent = "Marks are required";
        return;
    }

    const marks = Number(marksValue);

    if (
        Number.isNaN(marks) ||
        marks < 0 ||
        marks > 100
    ) {
        error.textContent =
            "Marks must be between 0 and 100";
        return;
    }

    const student = {
        id: Date.now(),
        name,
        email,
        marks
    };

    students.push(student);

    renderStudents();

    success.textContent =
        "Student added successfully!";

    form.reset();
});