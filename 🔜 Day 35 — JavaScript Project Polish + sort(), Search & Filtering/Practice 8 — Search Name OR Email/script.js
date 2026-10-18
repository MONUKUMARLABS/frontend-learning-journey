const results =
    students.filter(student => {

        const name =
            student.name.toLowerCase();

        const email =
            student.email.toLowerCase();

        return (
            name.includes(searchText) ||
            email.includes(searchText)
        );

    });