document.addEventListener("DOMContentLoaded", () => {

    const banner1 = document.querySelector("#banner1");
    const banner2 = document.querySelector("#banner2");
    const link1 = document.querySelector("#link1");
    const link2 = document.querySelector("#link2");
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
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${booksUrl}.jpeg`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${booksUrl}.jpeg`)
            link1.setAttribute("href", "https://www.kitapyurdu.com/");
            link2.setAttribute("href", "https://www.kitapyurdu.com/");
        } else if (moviesResult) {
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${moviesUrl}.jpg`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${moviesUrl}.jpg`)
            link1.setAttribute("href", "https://www.netflix.com/tr/");
            link2.setAttribute("href", "https://www.netflix.com/tr/");
        } else if (eventsResult) {
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${eventsUrl}.jpg`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${eventsUrl}.jpg`)
            link1.setAttribute("href", "https://www.biletix.com/anasayfa/TURKIYE/en");
            link2.setAttribute("href", "https://www.biletix.com/anasayfa/TURKIYE/en");
        } else if (cinemaResult) {
            banner1.setAttribute("src", `http://localhost:3000/img/banner/${cinemaUrl}.jpg`)
            banner2.setAttribute("src", `http://localhost:3000/img/banner/${cinemaUrl}.jpg`)
            link1.setAttribute("href", "https://www.avsarfilm.com.tr/");
            link2.setAttribute("href", "https://www.avsarfilm.com.tr/");
        } else {
            banner1.setAttribute("src", "http://localhost:3000/img/banner/all.png")
            banner2.setAttribute("src", "http://localhost:3000/img/banner/all.png")
            link1.setAttribute("href", "https://www.turhost.com/");
            link2.setAttribute("href", "https://www.turhost.com/");
        }


    }
    checkURL(url);
})