document.addEventListener("DOMContentLoaded", () => {
    const baslik = document.querySelector("#baslik");

    baslik.setAttribute("class","text-warning h4 text-center text-uppercase font-weight-bold")
    baslik.innerText = "Hoşgeldin " + JSON.parse(localStorage.getItem("user"))[0].name;
})