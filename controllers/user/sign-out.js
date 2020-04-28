const logController = require("../log");
const sessionstorage = require('sessionstorage');



exports.displaySignOutPage = (req, res) => {



    const date = new Date();
    logController.saveLocalStorage("POST", date, "/user/sign-out")
    sessionstorage.clear();
    res.redirect("/");
}