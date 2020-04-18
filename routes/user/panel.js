const express = require("express");
const router = express.Router();

router.get("/account", (req, res) => {
    res.render("index");
});

router.get("/settings", (req, res) => {
    res.render("index");
});

router.get("/actions", (req, res) => {
    res.render("index");
});

router.get("/sign-in", (req, res) => {
    res.render("index");
});

router.get("/sign-out", (req, res) => {
    res.render("index");
});

module.exports = router;

