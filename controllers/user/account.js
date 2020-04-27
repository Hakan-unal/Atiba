const logController = require("../log");



exports.displayAccountPage = (req, res) => {
    res.render("./pugs/account", {
        title: "Account", isAuthentication: true, obj: {
            username: "kullanıcı adı",
            name: "name",
            surname: "surname",
            email: "email"
        }
    });


    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/account")

}


exports.postAccountPage = (req, res) => {


    const date = new Date();
    logController.saveLocalStorage("POST", date, "/user/account")

    res.redirect("/");
}