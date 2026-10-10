const title =
    document.getElementById("title");

const changeBtn =
    document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {

    title.textContent =
        "Title Changed!";

});