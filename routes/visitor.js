const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.render("index",{title:"Hello"});
});

router.get("/sign-up", (req, res) => {
    res.render("index",{title:"Hello"});
});

module.exports = router;