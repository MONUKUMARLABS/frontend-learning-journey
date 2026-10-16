let students = [];

let editingId = null;

const form =
    document.getElementById("studentForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const marksInput =
    document.getElementById("marks");

const submitButton =
    document.getElementById("submitButton");

const error =
    document.getElementById("error");

const success =
    document.getElementById("success");

const studentCount =
    document.getElementById("studentCount");

const studentsContainer =
    document.getElementById("studentsContainer");

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

    studentCount.textContent = students.length;

    if (students.length === 0) {
        studentsContainer.textContent =
            "No students added yet.";
        return;
    }

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
    students = students.filter((student) => {
        return student.id !== id;
    });

    if (editingId === id) {
        form.reset();
        editingId = null;
        submitButton.textContent =
            "Add Student";
    }

    saveStudents();
    renderStudents();

    error.textContent = "";
    success.textContent =
        "Student deleted successfully!";
}

function editStudent(id) {
    const student = students.find((student) => {
        return student.id === id;
    });

    if (!student) {
        return;
    }

    editingId = student.id;

    nameInput.value = student.name;
    emailInput.value = student.email;
    marksInput.value = student.marks;

    submitButton.textContent =
        "Update Student";

    error.textContent = "";
    success.textContent =
        "Edit the student details and click Update Student.";

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
        const index = students.findIndex((student) => {
            return student.id === editingId;
        });

        if (index !== -1) {
            students[index].name = name;
            students[index].email = email;
            students[index].marks = marks;
        }

        success.textContent =
            "Student updated successfully!";
    } else {
        const student = {
            id: Date.now(),
            name,
            email,
            marks
        };

        students.push(student);

        success.textContent =
            "Student added successfully!";
    }

    saveStudents();
    renderStudents();

    form.reset();

    editingId = null;

    submitButton.textContent =
        "Add Student";
});

loadStudents();
renderStudents();