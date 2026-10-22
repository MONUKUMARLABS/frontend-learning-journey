async function getUsers() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }

        const users =
            await response.json();

        console.log(users);

    } catch (error) {

        console.error(error);

    }

}

getUsers();