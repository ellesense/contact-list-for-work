const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contact", require("./routes/contacts"));

app.get("/", (req, res) => {
  res.send({ msg: "Hello from backend." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
