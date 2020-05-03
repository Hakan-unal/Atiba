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
const documentationController = require("../controllers/user/documentation");



router.get("/", userController.displayUserPage);


router.get("/movies", moviesController.displayMoviesPage);
router.get("/movies/top50", moviesController.displayTop50);
router.get("/movies/selector", moviesController.displaySelector);
router.get("/movies/movietv",moviesController.displayMovieAndTv);


router.get("/books", booksController.displayBooksPage);
router.get("/books/politics", booksController.displayPolitics);
router.get("/books/economy", booksController.displayEconomy);
router.get("/books/computer", booksController.displayComputer);
router.get("/books/history", booksController.displayHistory);
router.get("/books/children", booksController.displayChildren);
router.get("/books/crime", booksController.displayCrime);
router.get("/books/art", booksController.displayArt);
router.get("/books/education", booksController.displayEducation);
router.get("/books/selector", booksController.displaySelector);
router.get("/books/bestseller", booksController.displayBestseller);


router.get("/events", eventsController.displayEventsPage);


router.get("/cinema", cinemaController.displayCinemaPage);


router.get("/covid-19", covid19Controller.displayCovid19Page);


router.get("/contact", contactController.displayContactPage);
router.post("/contact", contactController.postContactPage);


router.get("/account", accountController.displayAccountPage);
router.post("/account", accountController.postAccountPage);


router.get("/actions", actionController.displayActionPage);


router.get("/documentation", documentationController.displayDocumentationPage);


router.get("/sign-out", signOutController.displaySignOutPage);


module.exports = router;