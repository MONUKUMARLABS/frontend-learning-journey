async function getUser() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users/9999"
        );

    console.log(response.status);
    console.log(response.ok);

}

getUser();