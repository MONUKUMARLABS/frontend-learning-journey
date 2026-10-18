const sortSelect =
    document.getElementById("sortSelect");
    sortSelect.addEventListener(
    "change",
    () => {

        const value =
            sortSelect.value;

        let sortedStudents =
            [...students];

        if (value === "high") {

            sortedStudents.sort(
                (a, b) =>
                    b.marks - a.marks
            );

        }

        if (value === "low") {

            sortedStudents.sort(
                (a, b) =>
                    a.marks - b.marks
            );

        }

        if (value === "az") {

            sortedStudents.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );

        }

        if (value === "za") {

            sortedStudents.sort(
                (a, b) =>
                    b.name.localeCompare(a.name)
            );

        }

        renderStudents(sortedStudents);

    }
);