const highest =
    students.reduce(
        (highest, student) => {

            return Math.max(
                highest,
                student.marks
            );

        },
        0
    );

console.log(highest);