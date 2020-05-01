document.addEventListener("DOMContentLoaded", () => {

    const progresBar = document.querySelector("#progresBar");
    const container = document.querySelector("#contentContainer");

    container.addEventListener("click", (event) => {
        if(event.target.className==="card-img-top"){
            progresBar.setAttribute("class","progress h-100")
        }
    })



})