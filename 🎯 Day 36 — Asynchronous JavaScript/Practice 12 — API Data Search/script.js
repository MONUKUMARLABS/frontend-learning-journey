const filteredUsers =
    users.filter(user => {

        return user.name
            .toLowerCase()
            .includes(searchText);

    });