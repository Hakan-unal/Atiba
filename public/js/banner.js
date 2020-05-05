document.addEventListener("DOMContentLoaded", () => {

    const banner1 = document.querySelector("#banner1");
    const banner2 = document.querySelector("#banner2");
    const url = document.URL;


    checkURL = (url) => {

        const booksUrl = "books";
        const moviesUrl = "movies";
        const eventsUrl = "events";
        const cinemaUrl = "cinema";


        const booksResult = url.includes(booksUrl);
        const moviesResult = url.includes(moviesUrl);
        const eventsResult = url.includes(eventsUrl);
        const cinemaResult = url.includes(cinemaUrl);

        if (booksResult) {
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${booksUrl}.png`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${booksUrl}.png`)
        } else if (moviesResult) {
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${moviesUrl}.png`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${moviesUrl}.png`)
        } else if (eventsResult) {
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${eventsUrl}.png`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${eventsUrl}.png`)
        } else if (cinemaResult) {
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${cinemaUrl}.png`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${cinemaUrl}.png`)
        } else {
            banner1.setAttribute("src", "http://localhost:3000/img/banner/all.png")
            banner2.setAttribute("src", "http://localhost:3000/img/banner/all.png")
        }


    }
    checkURL(url);
})