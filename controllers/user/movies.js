const logController = require("../log");
const sessionstorage = require('sessionstorage');



exports.displayMoviesPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies", { title: "Movies", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies")
    }
}