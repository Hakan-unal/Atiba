document.addEventListener("DOMContentLoaded", () => {

console.log("Hata")
    const progresBar = document.querySelector("#progresBar");
    const form = document.querySelector("#form");

    form.addEventListener("submit", () => {
        progresBar.setAttribute("class", "progress");
    })

});