const nameInput =
    document.getElementById("nameInput");

const output =
    document.getElementById("output");

nameInput.addEventListener("input", () => {

    output.textContent =
        nameInput.value;

});