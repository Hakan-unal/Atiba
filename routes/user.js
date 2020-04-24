const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("./pugs/user",{title:"User Panel",isAuthentication:true});
});

router.get("/movies", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/events", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/cinema", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/books", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/contact", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/account", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/settings", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/actions", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/sign-in", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/sign-out", (req, res) => {
    res.render("index",{title:"Hello",isAuthentication:true});
});

router.get("/covid19", (req, res) => {
    res.render("index",{title:"Hello"});
});


module.exports = router;