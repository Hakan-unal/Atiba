const logController = require("../log");



exports.displayContactPage = (req, res) => {
    res.render("./pugs/contact", { title: "Contact", isAuthentication: true });
    
    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/contact")
}


exports.postContactPage = (req, res) => {
    

    const date = new Date();
    logController.saveLocalStorage("POST", date, "/user/contact")

    res.redirect("/");
}