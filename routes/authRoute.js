const {
  renderLogin,
  loginUser,
  renderSignup,
  signupUser,
} = require("../controller/authController.js");

const router = require("express").Router();

router.route("/login").get(renderLogin).post(loginUser);
router.route("/signup").get(renderSignup).post(signupUser);
