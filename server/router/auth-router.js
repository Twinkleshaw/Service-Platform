const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const Schema = require("../validators/auth-validator");
router.route("/").get(authController.home);
const validate = require("../middleware/validate-middleware.js");
const authMiddleware = require("../middleware/auth-middleware.js");
router
  .route("/register")
  .post(validate(Schema.signupSchema), authController.register);
router.route("/login").post(validate(Schema.loginSchema), authController.login);
router.route("/user").get(authMiddleware, authController.user);

module.exports = router;
