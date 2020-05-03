const satir1 = document.querySelector("#satir1");
const progresBar = document.querySelector("#progresBar");
const baslik1 = document.querySelector("#baslik1");
const baslik2 = document.querySelector("#baslik2");

setTimeout(() => {
    progresBar.setAttribute("class", "d-none");
    satir1.setAttribute("class", "row");
    baslik1.setAttribute("class","text-center h2 text-light my-3")
    satir2.setAttribute("class","row");
    baslik2.setAttribute("class","text-center h2 text-light my-3")
}, 3500);