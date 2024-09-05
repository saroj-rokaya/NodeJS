const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { blogs, users } = require("./model/index");
const app = express();
const { multer, storage } = require("./middleware/multerConfig.js");
const { hashSync, compareSync } = require("bcrypt");
const {singleBlog, deleteBlog, createBlog, homePage, createPage,} = require("./controller/blogController.js");
const {renderLogin, loginUser, renderSignup, signupUser,} = require("./controller/authController.js");
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true })); //to understand url-encoded data
// app.use(express.json());//to understand json data
app.set("view engine", "ejs");
require("./model/index");

app.get("/", homePage);
app.get("/singleBlog/:id", singleBlog);
app.get("/delete/:id", deleteBlog);
app.get("/create", createPage);
app.post("/create", upload.single("image"), createBlog);

//login section
app.get("/login", renderLogin);
app.post("/login", loginUser);

//signup section
app.get("/signup", renderSignup);
app.post("/signup", signupUser);

app.use(express.static("public/css/"));
app.use(express.static("./storage")); //to permit the storage file
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
