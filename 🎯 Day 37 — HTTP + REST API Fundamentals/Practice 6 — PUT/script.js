async function updateUser() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    name: "Rahul Updated",
                    email: "updated@example.com"
                })
            }
        );

    const user =
        await response.json();

    console.log(user);

}

updateUser();