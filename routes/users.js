const express = require("express");
const router = express.Router();

// POST => api/users
// Register a user
router.post("/", (req, res) => {
  res.send({ msg: "hi from users route" });
});

module.exports = router;
