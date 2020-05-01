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
router.get("/movies/action", moviesController.displayAction);
router.get("/movies/animation", moviesController.displayAnimation);
router.get("/movies/drama", moviesController.displayDrama);
router.get("/movies/adventure", moviesController.displayAdventure);
router.get("/movies/sci_fi", moviesController.displayScifi);
router.get("/movies/comedy", moviesController.displayComedy);
router.get("/movies/music", moviesController.displayMusic);
router.get("/movies/horror", moviesController.displayHorror);
router.get("/movies/romance", moviesController.displayRomance);
router.get("/movies/fantasy", moviesController.displayFantasy);
router.get("/movies/family", moviesController.displayFamily);
router.get("/movies/toprated", moviesController.displayToprated);
router.get("/movies/top50", moviesController.displayTop50);
router.get("/movies/comics", moviesController.displayComics);
router.get("/movies/selector", moviesController.displaySelector);







router.get("/events", eventsController.displayEventsPage);

router.get("/cinema", cinemaController.displayCinemaPage);

router.get("/books", booksController.displayBooksPage);

router.get("/covid-19", covid19Controller.displayCovid19Page);

router.get("/contact", contactController.displayContactPage);
router.post("/contact", contactController.postContactPage);

router.get("/account", accountController.displayAccountPage);
router.post("/account", accountController.postAccountPage);

router.get("/actions", actionController.displayActionPage);

router.get("/documentation", documentationController.displayDocumentationPage);

router.get("/sign-out", signOutController.displaySignOutPage);






module.exports = router;