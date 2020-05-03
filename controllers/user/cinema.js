const logController = require("../log");
const sessionstorage = require('sessionstorage');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./LocalStorage');


exports.displayCinemaPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const cinema = JSON.parse(localStorage.getItem("sinema"));

   
    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/cinema", { title: "Cinema", isAuthentication: isAuthen, vizyondakiler: cinema.vizyondakiler, gelecekler: cinema.gelecekler });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/cinema")
    }

}