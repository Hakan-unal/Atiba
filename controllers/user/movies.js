const logController = require("../log");
const sessionstorage = require('sessionstorage');
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




exports.displayAction = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/action", { title: "Action", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/action")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Action" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayAnimation = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/animation", { title: "Animation", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/animation")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Animation" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayDrama = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/drama", { title: "Drama", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/drama")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Drama" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayAdventure = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/adventure", { title: "Adventure", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/adventure")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Adventure" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayScifi = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/sci-fi", { title: "Sci-fi", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/sci-fi")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Sci-Fi" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayComedy = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/comedy", { title: "Comedy", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/comedy")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Comedy" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayMusic = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/music", { title: "Music", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/music")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Music" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })


}




exports.displayHorror = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/horror", { title: "Horror", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/horror")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Horror" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayRomance = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/romance", { title: "Romance", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/romance")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Romance" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayFantasy = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/fantasy", { title: "Fantasy", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/fantasy")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Fantasy" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayFamily = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/family", { title: "Family", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/family")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Family" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displayToprated = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/toprated", { title: "Toprated", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/toprated")
        }
    }


    db.collection("wtoprated")
        .find({ category: 9 })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })

}




exports.displayTop50 = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/top50", { title: "Top 50", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/top50")
        }
    }


    db.collection("top250")
        .find({ Rank: { $lte: 50 } })
        .toArray((err, movies) => {
            if (err) {
            }
            let array = [1];
            movies.forEach(movie => {
                array[movie.Rank] = movie;
            });
            array.splice(0, 1);
            model(array);
        })
}




exports.displayComics = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (movies) => {
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/movies/comics", { title: "Comics", isAuthentication: isAuthen, movies: movies });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/movies/comics")
        }
    }

    db.collection("toprated")
        .find({ Main_Genre: "Comics" })
        .toArray((err, movies) => {
            if (err) {
            }
            model(movies);
        })
}




exports.displaySelector = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();

    if (isAuthen !== true) {
        res.redirect("/login");
    } else {
        res.render("./pugs/movies/selector", { title: "Smart Selector", isAuthentication: isAuthen });
        const date = new Date();
        logController.saveLocalStorage("GET", date, "/user/movies/selector")
    }
}