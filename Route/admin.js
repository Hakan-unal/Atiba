const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    console.log("Selam bebek ben mugo kelebek");
    res.end("Hello World");
});

module.exports = router;