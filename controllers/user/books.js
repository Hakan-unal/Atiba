const logController = require("../log");
const sessionstorage = require('sessionstorage');
const database = require("../../utility/database");



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
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);

        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/art", { title: "Art", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/art")
        }
    }


    db.collection("books")
        .find({ weeks_on_list: 7 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}



exports.displayEducation = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);

        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/education", { title: "Education", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/education")
        }
    }


    db.collection("books")
        .find({ weeks_on_list: 8 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
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
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);


        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/bestseller", { title: "Bestseller", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/bestseller")
        }
    }



    db.collection("books")
        .find({ weeks_on_list: 25 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}





exports.displayPolitics = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);

        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/politics", { title: "Politics", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/politics")
        }
    }

    db.collection("books")
        .find({ weeks_on_list: 10 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}



exports.displayEconomy = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();

    const model = (books) => {
        console.log(books.length);

        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/economy", { title: "Economy", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/economy")
        }
    }


    db.collection("books")
        .find({ weeks_on_list: 11 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}



exports.displayHistory = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);

        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/history", { title: "History", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/history")
        }
    }

    db.collection("books")
        .find({ weeks_on_list: 12 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}



exports.displayChildren = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);

        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/children", { title: "Children", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/children")
        }
    }


    db.collection("books")
        .find({ weeks_on_list: 13 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}




exports.displayCrime = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);

        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/crime", { title: "Crime", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/crime")
        }
    }

    db.collection("books")
        .find({ weeks_on_list: 14 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}



exports.displayComputer = (req, res) => {
    const isAuthen = JSON.parse(sessionstorage.getItem("authentication"));
    const db = database.getdb();


    const model = (books) => {
        console.log(books.length);
        if (isAuthen !== true) {
            res.redirect("/login");
        } else {
            res.render("./pugs/books/computer", { title: "Computer", isAuthentication: isAuthen });
            const date = new Date();
            logController.saveLocalStorage("GET", date, "/user/books/computer")
        }
    }


    db.collection("books")
        .find({ weeks_on_list: 15 })
        .toArray((err, books) => {
            if (err) {
            }
            model(books)
        })
}