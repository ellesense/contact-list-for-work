const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Hello from backend." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
