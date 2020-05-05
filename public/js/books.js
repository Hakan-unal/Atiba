document.addEventListener("DOMContentLoaded", () => {

    const progresBar = document.querySelector("#progresBar");
    const container = document.querySelector("#contentContainer");
    const searchInput = document.querySelector("#searchInput");
    const searchButton = document.querySelector("#searchButton");




    container.addEventListener("click", (event) => {
        if (event.target.className === "card-img-top") {
            progresBar.setAttribute("class", "progress h-100 bg-dark")
        }
    })



    searchButton.addEventListener("click", () => {
        if (searchInput.value !== "") {
            url = `https://www.google.com/search?source=hp&ei=zaexXvzONsSOlwSZ_6ygDA&q=${searchInput.value}&oq=${searchInput.value}`;
            window.open(url);
            searchInput.value = "";
        }
    })




})