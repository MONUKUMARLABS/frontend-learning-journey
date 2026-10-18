const emailResults =
    students.filter(student => {

        return student.email
            .toLowerCase()
            .includes(searchText);

    });