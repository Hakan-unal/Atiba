const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
    res.render("index");
});

router.get("/theater", (req, res) => {
    res.render("index");
});

router.get("/events", (req, res) => {
    res.render("index");
});

router.get("/concert", (req, res) => {
    res.render("index");
});

router.get("/cinema", (req, res) => {
    res.render("index");
});

router.get("/books", (req, res) => {
    res.render("index");
});

router.get("/contact", (req, res) => {
    res.render("index");
});


module.exports = router;