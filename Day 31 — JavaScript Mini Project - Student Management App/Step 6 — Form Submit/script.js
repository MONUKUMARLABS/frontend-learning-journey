form.addEventListener("submit", (event) => {

    event.preventDefault();

    error.textContent = "";
    success.textContent = "";

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const marks =
        Number(marksInput.value);

    if (name === "") {

        error.textContent =
            "Name is required";

        return;
    }

    if (!email.includes("@")) {

        error.textContent =
            "Please enter a valid email";

        return;
    }

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