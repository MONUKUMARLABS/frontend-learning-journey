function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 75) {
        return "A";
    }

    if (marks >= 60) {
        return "B";
    }

    if (marks >= 40) {
        return "C";
    }

    return "F";

}