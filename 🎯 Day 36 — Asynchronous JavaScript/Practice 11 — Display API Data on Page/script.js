const usersContainer =
    document.getElementById(
        "usersContainer"
    );

async function getUsers() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        if (!response.ok) {

            throw new Error(
                "Unable to load users"
            );

        }

        const users =
            await response.json();

        usersContainer.innerHTML = "";

        users.forEach((user) => {

            usersContainer.innerHTML += `

                <div>

                    <h3>
                        ${user.name}
                    </h3>

                    <p>
                        ${user.email}
                    </p>

                </div>

            `;

        });

    } catch (error) {

        usersContainer.innerHTML =
            "<p>Unable to load users.</p>";

        console.error(error);

    }

}

getUsers();