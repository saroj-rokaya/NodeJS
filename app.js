const express = require("express"); //initialize express
const app = express(); //call express

//set up ejs as view engine for rendering views
app.set("view engine", "ejs");

require("./model/index")//initialize db

//define routes
app.get("/", (req, res) => {
  // res.send("this is home");
  res.render("home"); //render home.ejs
});

//about page route with person object as data
const person = {
  name: "saroj",
  age: 20,
  city: "kahmandu",
};

//about page route with person object as data
app.get("/about", (req, res) => {
  // res.send("this is about");
  res.render("about.ejs", { pass: person }); //render about.ejs
});

//use public folder for static files (css, images, etc.)
app.use(express.static("public/css/"));
//start server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
