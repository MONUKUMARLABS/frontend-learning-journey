async function getUser() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

    console.log(response.status);
    console.log(response.ok);

}