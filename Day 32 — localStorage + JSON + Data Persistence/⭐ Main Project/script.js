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

const studentCount =
    document.getElementById("studentCount");

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

    renderStudents();
}

function renderStudents() {
    studentsContainer.innerHTML = "";

    studentCount.textContent =
        `Total Students: ${students.length}`;

    students.forEach((student) => {
        const result = getResult(student.marks);
        const grade = getGrade(student.marks);

        const card = document.createElement("div");
        card.className = "student-card";

        const heading = document.createElement("h3");
        heading.textContent = student.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${student.email}`;

        const marks = document.createElement("p");
        marks.textContent = `Marks: ${student.marks}`;

        const resultText = document.createElement("p");
        resultText.textContent = `Result: ${result}`;

        const gradeText = document.createElement("p");
        gradeText.textContent = `Grade: ${grade}`;

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.addEventListener("click", () => {
            deleteStudent(student.id);
        });

        card.append(
            heading,
            email,
            marks,
            resultText,
            gradeText,
            deleteButton
        );

        studentsContainer.appendChild(card);
    });
}

function deleteStudent(id) {
    students = students.filter((student) => {
        return student.id !== id;
    });

    saveStudents();

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

    const student = {
        id: Date.now(),
        name,
        email,
        marks
    };

    students.push(student);

    saveStudents();

    renderStudents();

    success.textContent =
        "Student added successfully!";

    form.reset();
});

loadStudents();