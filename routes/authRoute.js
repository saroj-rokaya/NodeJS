const router = require("express").Router();
const { renderLogin, loginUser, signupUser, renderSignup } = require("../controller/authController.js");


router.route("/login").get(renderLogin).post(loginUser);
router.route("/signup").get(renderSignup).post(signupUser);

module.exports = router;