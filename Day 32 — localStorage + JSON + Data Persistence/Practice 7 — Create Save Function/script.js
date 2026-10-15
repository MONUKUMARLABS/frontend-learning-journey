function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}

/* Test: */

saveStudents();