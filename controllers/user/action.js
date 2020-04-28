const logController = require("../log");
const sessionstorage = require('sessionstorage');


exports.displayActionPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        const actions = logController.getActionLocalStorage();
        res.render("./pugs/action", {
            title: "User Actions", isAuthentication: isAuthen, objects: actions.reverse()
        });

        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/actions")
    }
}