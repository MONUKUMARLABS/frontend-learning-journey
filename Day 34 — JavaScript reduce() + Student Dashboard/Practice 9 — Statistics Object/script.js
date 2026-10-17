function calculateStatistics() {

    const totalStudents =
        students.length;

    const totalMarks =
        students.reduce(
            (total, student) =>
                total + student.marks,
            0
        );

    const passedCount =
        students.filter(
            student => student.marks >= 40
        ).length;

    const failedCount =
        students.filter(
            student => student.marks < 40
        ).length;

    const averageMarks =
        totalStudents > 0
            ? totalMarks / totalStudents
            : 0;

    return {
        totalStudents,
        totalMarks,
        passedCount,
        failedCount,
        averageMarks
    };
}