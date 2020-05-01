document.addEventListener("DOMContentLoaded", () => {


    const progresBar = document.querySelector("#progresBar");
    const form = document.querySelector("#form");

    form.addEventListener("submit", () => {
        progresBar.setAttribute("class", "progress");
    })

});