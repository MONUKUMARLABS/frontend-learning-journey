const savedStudents =
    localStorage.getItem("students");

const loadedStudents =
    JSON.parse(savedStudents);

console.log(loadedStudents);

/* First Student's Name: */

console.log(
    loadedStudents[0].name
);