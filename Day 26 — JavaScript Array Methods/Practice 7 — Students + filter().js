const students = [
    {
        name: "Rahul",
        marks: 82
    },
    {
        name: "Amit",
        marks: 68
    },
    {
        name: "Priya",
        marks: 91
    },
    {
        name: "Neha",
        marks: 35
    }
];

const passedStudents = students.filter((student) => {
    return student.marks >= 40;
});

console.log(passedStudents);