const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/events", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/cinema", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/books", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/contact", (req, res) => {
    res.render("index",{title:"Hello"});
});


module.exports = router;