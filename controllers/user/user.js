const logController = require("../log");




exports.displayUserPage = (req, res) => {
    res.render("./pugs/user", { title: "Client Page", isAuthentication: true });

    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user")

}