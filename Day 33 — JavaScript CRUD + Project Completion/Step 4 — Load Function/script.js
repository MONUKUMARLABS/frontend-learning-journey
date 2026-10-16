function loadStudents() {

    const savedStudents =
        localStorage.getItem("students");

    if (savedStudents) {

        students =
            JSON.parse(savedStudents);

    }

}