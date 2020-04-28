const logController = require("../log");
const sessionstorage = require('sessionstorage');



exports.displayContactPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/contact", { title: "Contact", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/contact")
    }
}


exports.postContactPage = (req, res) => {


    const date = new Date();
    logController.saveLocalStorage("POST", date, "/user/contact")

    res.redirect("/");
}