async function getUsers() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        if (!response.ok) {

            throw new Error(
                "Request failed"
            );

        }

        const users =
            await response.json();

        console.log(users);

    } catch (error) {

        console.log(error);

    }

}