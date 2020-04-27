const logController = require("../log");



exports.displayCovid19Page = (req, res) => {
    res.render("./pugs/covid-19", { title: "Covid-19", isAuthentication: true });

    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/covid-19")

}