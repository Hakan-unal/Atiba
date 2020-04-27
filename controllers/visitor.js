const userModel = require("../models/user");



exports.displayLoginPage = (req, res) => {
    res.render("./pugs/login", { title: "Login", isAuthentication: false });
}


exports.postLoginPage = (req, res) => {
    userModel.checkUser(req.body.username, req.body.password).then(result => {
        if (result) {
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