const logController = require("../log");
const sessionstorage = require('sessionstorage');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./LocalStorage');


exports.displayEventsPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const events = JSON.parse(localStorage.getItem("etkinlikler"));
    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/events", { title: "Events", isAuthentication: isAuthen, events: events });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/events")
    }
}