const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");

// GET => api/contacts
// Get all contacts for a signed in user
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    return res.status(200).json(contacts);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Error has occurred");
  }
});

// POST => api/contacts
// Create a new contact
router.post("/", (req, res) => {
  res.send({ msg: "hi from users route" });
});

// PUT => api/contacts/:id
// Update an existing contact
router.put("/:id", (req, res) => {
  res.send({ msg: "hi from users route" });
});

// DELTE => api/contacts
// Delete an existing contact
router.delete("/", (req, res) => {
  res.send({ msg: "hi from users route" });
});

module.exports = router;
