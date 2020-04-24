exports.displayLoginPage = (req, res) => {
    res.render("./pugs/login", { title: "Login", isAuthentication: true });
}


exports.postLoginPage = (req, res) => {
    console.log(req.body.username);
    res.redirect("/user");
}


exports.displaySignUpPage = (req, res) => {
    res.render("./pugs/sign-up", { title: "Sign Up" });
}


exports.postSignUp = (req, res) => {
    res.redirect("/register");
}


exports.displayIndexPage = (req, res) => {
    res.render("./index", { title: "Homepage" });
}


exports.displayRegisterPage = (req, res) => {
    res.render("./pugs/register", { title: "Succesful"});
}