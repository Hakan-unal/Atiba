const logController = require("../log");
const sessionstorage = require('sessionstorage');



exports.displayDocumentationPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/documentation", { title: "Documentation", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/documentation")
    }

}