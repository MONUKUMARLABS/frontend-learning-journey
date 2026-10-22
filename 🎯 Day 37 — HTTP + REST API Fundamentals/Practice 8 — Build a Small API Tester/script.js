const loadButton =
    document.getElementById(
        "loadButton"
    );

const output =
    document.getElementById(
        "output"
    );

loadButton.addEventListener(
    "click",
    async () => {

        output.textContent =
            "Loading...";

        try {

            const response =
                await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

            if (!response.ok) {

                throw new Error(
                    "Failed to load users"
                );

            }

            const users =
                await response.json();

            output.innerHTML = "";

            users.forEach(user => {

                output.innerHTML += `

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

            output.textContent =
                "Unable to load users.";

            console.error(error);

        }

    }
);