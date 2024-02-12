const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

const { signUpSchema, validate } = require("../validator/validator");

router.route("/").get(authController.home);

router.route("/register").post(validate(signUpSchema), authController.register);

router.route("/login").post(authController.login);

module.exports = router;
