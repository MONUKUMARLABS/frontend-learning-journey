const topStudent =
    students.reduce(
        (top, student) => {

            if (student.marks > top.marks) {
                return student;
            }

            return top;

        },
        students[0]
    );

console.log(topStudent);