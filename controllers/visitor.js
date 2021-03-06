const userModel = require("../models/user");
const sessionstorage = require('sessionstorage');
const logController = require("./log");


exports.displayLoginPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.render("./pugs/login", { title: "Login", isAuthentication: isAuthen });
    } else {
        res.redirect("/user");
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user")
    }
}


exports.postLoginPage = (req, res) => {
    userModel.checkUser(req.body.username, req.body.password).then(result => {
        if (result) {
            sessionstorage.setItem("user", JSON.stringify(result._id));
            sessionstorage.setItem("authentication", JSON.stringify(true));
            logController.saveActionLocalStorage(req.body.username, "LOGIN")
            res.redirect("/user");
        } else {
            res.redirect("/login");
        }
    })

}


exports.displaySignUpPage = (req, res) => {
    res.render("./pugs/sign-up", { title: "Sign Up" });
}


exports.postSignUp = (req, res) => {

    userModel.saveUser(req.body.username, req.body.name, req.body.surname, req.body.email, req.body.password);
    res.redirect("/register");
}


exports.displayIndexPage = (req, res) => {
    res.render("./index", { title: "Homepage" });
}


exports.displayRegisterPage = (req, res) => {
    res.render("./pugs/register", { title: "Succesful" });
}


exports.displayForgetPasswordPage = (req, res) => {
    res.render("./pugs/forgetPassword", { title: "Forget Password" })
}