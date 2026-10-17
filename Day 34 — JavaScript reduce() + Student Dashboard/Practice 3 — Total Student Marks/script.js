const students = [
    { name: "Rahul", marks: 82 },
    { name: "Amit", marks: 68 },
    { name: "Priya", marks: 91 }
];

const totalMarks =
    students.reduce(
        (total, student) => {
            return total + student.marks;
        },
        0
    );

console.log(totalMarks);