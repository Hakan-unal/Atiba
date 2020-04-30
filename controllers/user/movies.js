const logController = require("../log");
const sessionstorage = require('sessionstorage');
const moviesModel = require("../../models/movies");
const database = require("../../utility/database");




exports.displayMoviesPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies", { title: "Movies", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies")
    }
}



exports.displayAllMoviesPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();

    const display = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/movies", { title: "All Movies", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/all")
        }
    }

    return db.collection("wmovies")
        .find({ category: 4 })
        .toArray((err, movies) => {
            if (err) {
            }
            display(movies);
        })



}



exports.displayTop250Page = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies/top250", { title: "Top250", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies/top250")
    }
}



exports.displayNetflixPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies/netflix", { title: "Netflix", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies/netflix")
    }
}



exports.displayTopratedPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies/toprated", { title: "Toprated", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies/toprated")
    }
}



exports.displayComicsPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies/comics", { title: "Comics", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies/comics")
    }
}



exports.displaySmartSelectorPage = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies/selector", { title: "Smart Selector", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies/selector")
    }
}