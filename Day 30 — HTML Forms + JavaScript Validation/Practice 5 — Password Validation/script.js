const password =
    passwordInput.value;

if (password.length < 8) {

    console.log(
        "Password must be at least 8 characters"
    );

    return;
}