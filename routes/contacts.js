const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// GET => api/contacts
// Get all contacts for a signed in user
router.get("/", auth, (req, res) => {
  res.send({ msg: "hi from users route" });
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
