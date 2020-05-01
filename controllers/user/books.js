const logController = require("../log");
const sessionstorage = require('sessionstorage');



exports.displayBooksPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books", { title: "Books", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books")
    }
}



exports.displayArt = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/art", { title: "Art", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/art")
    }
}



exports.displayEducation = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/education", { title: "Education", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/education")
    }
}



exports.displaySelector = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/selector", { title: "Smart Selector", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/selector")
    }
}



exports.displayBestseller = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/bestseller", { title: "Bestseller", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/bestseller")
    }
}





exports.displayPolitics = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/politics", { title: "Politics", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/politics")
    }
}



exports.displayEconomy = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/economy", { title: "Economy", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/economy")
    }
}



exports.displayHistory = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/history", { title: "History", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/history")
    }
}



exports.displayChildren = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/children", { title: "Children", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/children")
    }
}




exports.displayCrime = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/crime", { title: "Crime", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/crime")
    }
}



exports.displayComputer = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));


    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/books/computer", { title: "Computer", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/books/computer")
    }
}