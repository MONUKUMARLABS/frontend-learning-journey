form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        nameInput.value.trim();

    if (name === "") {

        console.log("Name is required");

        return;
    }

    console.log("Name is valid");

});