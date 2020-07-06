const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const config = require("config");
const User = require("../models/User");

// GET => api/auth
// Get signed in user
router.get("/", (req, res) => {
  res.send({ msg: "hi" });
});

// POST => api/auth
// Sign in
router.post(
  "/",
  [
    check("email", "Please enter a valid email.").isEmail(),
    check("password", "Password is required.").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials." });
      }
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials." });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 260000 },
        (err, jsonWebToken) => {
          if (err) throw err;
          return res.json(jsonWebToken);
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.statue(500).send("An error has occurred.");
    }
  }
);

module.exports = router;
