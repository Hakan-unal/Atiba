const logController = require("../log");
const sessionstorage = require('sessionstorage');


exports.displayActionPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    
    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/action", {
            title: "User Actions", isAuthentication: isAuthen, objects: [{
                username: "kullancıı",
                operation: "operation",
                date: "date"
            }]
        });

        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/actions")
    }
}