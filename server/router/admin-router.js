const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUser);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContact);
module.exports = router;
