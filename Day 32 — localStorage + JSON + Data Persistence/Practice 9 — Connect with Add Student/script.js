const student = {
    id: Date.now(),
    name: "Priya",
    email: "priya@example.com",
    marks: 91
};

/* Then: */

students.push(student);

saveStudents();

/* Finally: */

loadStudents();

console.log(students);