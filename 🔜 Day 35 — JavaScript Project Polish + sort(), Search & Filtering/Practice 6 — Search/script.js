const searchText = "rah";

const results =
    students.filter(student => {

        return student.name
            .toLowerCase()
            .includes(searchText);

    });

console.log(results);