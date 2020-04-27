const userModel = require("../models/user");



exports.displayLoginPage = (req, res) => {
    res.render("./pugs/login", { title: "Login", isAuthentication: true });
}


exports.postLoginPage = (req, res) => {
    res.redirect("/user");
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