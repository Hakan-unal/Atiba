const logController = require("../log");
const sessionstorage = require('sessionstorage');



exports.displayCovid19Page = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/covid-19", { title: "Covid-19", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/covid-19")
    }

}