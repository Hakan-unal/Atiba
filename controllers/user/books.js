const logController = require("../log");



exports.displayBooksPage = (req, res) => {
    res.render("./pugs/books", { title: "Books", isAuthentication: true });


    const date = new Date();
    logController.saveLocalStorage("GET", date, "/user/books")
}