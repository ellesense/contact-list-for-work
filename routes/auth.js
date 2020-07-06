const express = require("express");
const router = express.Router();

// GET => api/auth
// Get signed in user
router.get("/", (req, res) => {
  res.send({ msg: "hi" });
});

// POST => api/auth
// Sign in
router.post("/", (req, res) => {
  res.send({ msg: "hi from auth route" });
});

module.exports = router;
