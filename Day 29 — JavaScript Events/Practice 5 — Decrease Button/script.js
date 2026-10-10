let count = 0;

const countElement =
    document.getElementById("count");

const increase =
    document.getElementById("increase");

increase.addEventListener("click", () => {

    count++;

    countElement.textContent = count;

});

const decrease = document.getElementById("decrease");

decrease.addEventListener("click", () => {

    count--;

    countElement.textContent = count;

});