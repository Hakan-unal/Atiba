document.addEventListener("DOMContentLoaded", () => {
    const baslik = document.querySelector("#baslik");

    baslik.innerText = "Welcome " + JSON.parse(localStorage.getItem("user"))[0].name;
})