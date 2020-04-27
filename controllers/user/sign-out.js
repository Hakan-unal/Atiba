const logController = require("../log");



exports.displaySignOutPage = (req, res) => {



    const date = new Date();
    logController.saveLocalStorage("POST", date, "/user/sign-out")

    res.redirect("/");
}