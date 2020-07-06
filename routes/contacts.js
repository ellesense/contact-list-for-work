const express = require("express");
const router = express.Router();

// GET => api/contacts
// Get all contacts for a signed in user
router.get("/", (req, res) => {
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
