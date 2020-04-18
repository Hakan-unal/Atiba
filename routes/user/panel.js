const express = require("express");
const router = express.Router();

router.get("/account", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/settings", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/actions", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/sign-in", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/sign-out", (req, res) => {
    res.render("index",{title:"Hello"});
});

module.exports = router;

