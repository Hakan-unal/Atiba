const logController = require("../log");
const sessionstorage = require('sessionstorage');




exports.displayUserPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/user", { title: "Client Page", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user")
    }

}