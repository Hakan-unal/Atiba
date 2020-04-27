const logController = require("../log");


exports.displayActionPage = (req, res) => {
    res.render("./pugs/action", {
        title: "User Actions", isAuthentication: true, objects: [{
            username: "kullancıı",
            operation: "operation",
            date: "date"
        }]
    });

    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/actions")
}