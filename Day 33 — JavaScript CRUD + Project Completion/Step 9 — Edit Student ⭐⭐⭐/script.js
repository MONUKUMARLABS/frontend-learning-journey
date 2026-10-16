function editStudent(id) {

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return;
    }

    editingId = student.id;

    nameInput.value =
        student.name;

    emailInput.value =
        student.email;

    marksInput.value =
        student.marks;

    submitButton.textContent =
        "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}