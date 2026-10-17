function renderDashboard() {

    const stats =
        calculateStatistics();

    totalStudentsElement.textContent =
        stats.totalStudents;

    passedCountElement.textContent =
        stats.passedCount;

    failedCountElement.textContent =
        stats.failedCount;

    averageMarksElement.textContent =
        stats.averageMarks.toFixed(2);

}