async function deleteUser() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "DELETE"
            }
        );

    console.log(
        response.status
    );

}

deleteUser();