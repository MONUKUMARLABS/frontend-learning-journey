async function createUser() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        name: "Rahul",
                        email: "rahul@example.com"
                    })
                }
            );

        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }

        const user =
            await response.json();

        console.log(user);

    } catch (error) {

        console.error(error);

    }

}

createUser();