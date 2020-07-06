const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// POST => api/users
// Register a user
router.post(
  "/",
  [
    check("name", "Name is required.").not().isEmpty(),
    check("email", "A valid email is required.").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.send(req.body);
  }
);

module.exports = router;
