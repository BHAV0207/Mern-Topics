const express = require("express");
const authMiddleware = require("../MiddleWare/authMiddleware");

const router = express.Router();

// Protected route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({ message: `Welcome user with ID: ${req.user}` });
});

module.exports = router;