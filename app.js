const express = require("express");
require("dotenv").config();

const app = express();


//call teh router from the routes folder
const blogRoute = require("./routes/blogRoute.js");
const authRoute = require("./routes/authRoute.js");

app.set("view engine", "ejs");
require("./model/index");
app.use(express.urlencoded({ extended: true })); //to understand url-encoded data


//create a url by using the router
app.use("/", blogRoute);
app.use("/", authRoute);




app.use(express.static("public/css/"));
app.use(express.static("./storage")); //to permit the storage file
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
