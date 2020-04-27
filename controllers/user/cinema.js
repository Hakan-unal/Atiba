const logController = require("../log");



exports.displayCinemaPage = (req, res) => {
    res.render("./pugs/cinema", { title: "Cinema", isAuthentication: true });

    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/cinema")

}