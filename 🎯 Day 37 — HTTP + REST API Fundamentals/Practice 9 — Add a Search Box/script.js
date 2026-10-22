searchInput.addEventListener(
    "input",
    () => {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();

        const filteredUsers =
            users.filter(user =>
                user.name
                    .toLowerCase()
                    .includes(searchText)
            );

        // Render filteredUsers

    }
);