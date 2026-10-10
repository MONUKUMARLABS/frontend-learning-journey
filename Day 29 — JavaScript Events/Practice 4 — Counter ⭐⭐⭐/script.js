let count = 0;

const countElement =
    document.getElementById("count");

const increase =
    document.getElementById("increase");

increase.addEventListener("click", () => {

    count++;

    countElement.textContent = count;

});