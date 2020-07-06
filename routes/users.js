const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "The email is already in use." });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcryptjs.genSalt(10);
      user.password = await bcryptjs.hash(password, salt);

      await user.save();

      // return with a JSON Web Token
      return res.send("saved user");
    } catch (err) {
      console.error(err.message);
      return res.statue(500).send("An error has occurred.");
    }

    return res.send(req.body);
  }
);

module.exports = router;
