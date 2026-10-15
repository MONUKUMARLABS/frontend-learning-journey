function deleteStudent(id) {

    students = students.filter(
        student => student.id !== id
    );

    saveStudents();

    renderStudents();
}