
window.addEventListener("scroll", (event) => {
    const progressBar = document.getElementById("progress-bar");
    progressBar.setAttribute("style", `width:${window.scrollY / 2500*100}%`);
    console.log(parseInt(window.scrollY) / 2500);
});