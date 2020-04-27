const logController = require("../log");



exports.displayMoviesPage = (req, res) => {
    res.render("./pugs/movies", { title: "Movies", isAuthentication: true });

    
    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/movies")
}