const logController = require("../log");



exports.displayEventsPage = (req, res) => {
    res.render("./pugs/events", { title: "Events", isAuthentication: true });

    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/events")
}