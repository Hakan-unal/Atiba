
window.addEventListener("scroll", (event) => {
    const progressBar = document.getElementById("progress-bar");
    progressBar.setAttribute("style", `width:${window.scrollY / 246*100}%`);
    console.log(window.scrollY);
});