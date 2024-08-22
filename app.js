const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");

require("./model/index");

app.get("/", (req, res) => {
  res.render("home");
});

const person = {
  name: "saroj",
  age: 20,
  city: "kahmandu",
};

app.get("/about", (req, res) => {
  res.render("about.ejs", { pass: person });
});

app.use(express.static("public/css/"));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
