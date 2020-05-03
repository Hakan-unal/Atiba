const row = document.querySelector("#row");
const progresBar = document.querySelector("#progresBar");

setTimeout(() => {
    progresBar.setAttribute("class", "d-none");
    row.setAttribute("class", "row");
}, 3500);
console.log("Hata")
