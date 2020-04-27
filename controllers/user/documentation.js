const logController = require("../log");



exports.displayDocumentationPage = (req, res) => {
    res.render("./pugs/documentation", { title: "Documentation", isAuthentication: true });

    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/documentation")

}