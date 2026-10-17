students =
    students.filter(
        student => student.id !== id
    );

saveStudents();

renderStudents();

renderDashboard();