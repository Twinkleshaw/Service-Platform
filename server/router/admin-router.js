const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminController.getAllUser);
router.route("/contacts").get(authMiddleware, adminController.getAllContact);
module.exports = router;
