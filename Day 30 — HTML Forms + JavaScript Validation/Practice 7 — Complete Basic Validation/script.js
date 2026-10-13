form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;

    if (name === "") {

        error.textContent =
            "Name is required";

        return;
    }

    if (!email.includes("@")) {

        error.textContent =
            "Please enter a valid email";

        return;
    }

    if (password.length < 8) {

        error.textContent =
            "Password must be at least 8 characters";

        return;
    }

    error.textContent = "";

    console.log("Validation successful");

});