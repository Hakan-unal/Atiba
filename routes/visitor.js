const express = require("express");
const router = express.Router();
const visitorController = require("../controllers/visitor");



router.get("/", visitorController.displayIndexPage);

router.get("/sign-up", visitorController.displaySignUpPage);
router.post("/sign-up", visitorController.postSignUp);

router.get("/login", visitorController.displayLoginPage);
router.post("/login", visitorController.postLoginPage);

router.get("/register", visitorController.displayRegisterPage);

router.get("/forget", visitorController.displayForgetPasswordPage);

module.exports = router;