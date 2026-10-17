const failedCount =
    students.filter(
        student => student.marks < 40
    ).length;

console.log(failedCount);