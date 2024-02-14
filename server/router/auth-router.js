const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authContact = require("../controllers/contact-controller");

const { signUpSchema, validate } = require("../validator/validator");

router.route("/").get(authController.home);

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);
router.route("/contact").post(authContact.contact);

module.exports = router;
