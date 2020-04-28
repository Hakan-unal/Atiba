const logController = require("../log");
const sessionstorage = require('sessionstorage');



exports.displayCinemaPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    
    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/cinema", { title: "Cinema", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/cinema")
    }

}