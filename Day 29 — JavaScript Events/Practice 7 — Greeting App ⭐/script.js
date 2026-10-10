const nameInput =
    document.getElementById("name");

const greetButton =
    document.getElementById("greet");

const message =
    document.getElementById("message");

greetButton.addEventListener("click", () => {

    message.textContent =
        "Hello " + nameInput.value;

});