const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/user/movies");
const eventsController = require("../controllers/user/events");
const userController = require("../controllers/user/user");
const cinemaController = require("../controllers/user/cinema");
const booksController = require("../controllers/user/books");
const contactController = require("../controllers/user/contact");
const accountController = require("../controllers/user/account");
const actionController = require("../controllers/user/action");
const signOutController = require("../controllers/user/sign-out");
const covid19Controller = require("../controllers/user/covid-19");


router.get("/", userController.displayUserPage);

router.get("/movies", moviesController.displayMoviesPage);

router.get("/events", eventsController.displayEventsPage);

router.get("/cinema", cinemaController.displayCinemaPage);

router.get("/books", booksController.displayBooksPage);

router.get("/contact", contactController.displayContactPage);

router.get("/account", accountController.displayAccountPage);

router.get("/actions", actionController.displayActionPage);

router.get("/sign-out", signOutController.displaySignOutPage);

router.get("/covid-19", covid19Controller.displayCovid19Page);


module.exports = router;