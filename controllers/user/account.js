const logController = require("../log");
const sessionstorage = require('sessionstorage');
userModel = require("../../models/user");




exports.displayAccountPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    
    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        const id = JSON.parse(sessionstorage.getItem("user"));
        userModel.findUser(id).then(user => {
            res.render("./pugs/account", { title: "Account", isAuthentication: isAuthen, obj: user });
        })
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/account")
    }






}



exports.postAccountPage = (req, res) => {

    userModel.updateUser(req.body.id, req.body.name, req.body.surname, req.body.username, req.body.email);



    sessionstorage.clear();
    sessionstorage.setItem("user", JSON.stringify(req.body.id));
    const date = new Date();
    logController.saveLocalStorage("POST", date, "updated Account")

    res.redirect("/user");
}