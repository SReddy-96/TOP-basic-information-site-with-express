require("dotenv").config(); // loads the .env file
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

// Middleware to handle 404 errors (unmatched routes)
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
