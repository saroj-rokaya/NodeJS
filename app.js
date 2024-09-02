const express = require("express");
require("dotenv").config();
const { blogs, users } = require("./model/index");
// const multer = require("./middleware/multerConfig").multer;
// const storeate = require("./middleware/multerConfig").storage
const app = express();
const { multer, storage } = require("./middleware/multerConfig.js");
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true })); //to understand url-encoded data
// app.use(express.json());//to understand json data
app.set("view engine", "ejs");
require("./model/index");

app.get("/", async (req, res) => {
  const blogsData = await blogs.findAll();
  res.render("home", { blogdata: blogsData });
});

app.get("/create", (req, res) => {
  res.render("create");
});



app.get("/singleBlog/:id",async(req,res)=>{
  const id = req.params.id;
  const fullBlog = await blogs.findByPk(id);
  res.render("singleBlog",{fullBlog:fullBlog});
})


app.get("/delete/:id",async(req,res)=>{
  const id = req.params.id;
await blogs.destroy({
    where:{
      id:id
    }
  })
  res.redirect("/");
})


app.post("/create", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  // const title = req.body.title
  // const subtitle = req.body.subtitle
  // const description = req.body.description
  // const filename = req.file.filename //to get image data
  const { title, subtitle, description } = req.body;

  await blogs.create({
    title: title,
    subtitle: subtitle,
    description: description,
    image: req.file.filename, //req.file.path to get the path of the uploaded file, but not recommended for production. req.file.filename to get the name of the uploaded file.

    // title,
    // subtitle,
    // description
  });
  res.send("create blog added successfully");
});

app.get("/login",(req,res)=>{
  res.render("login");
})
app.get("/signup",(req,res)=>{
  res.render("signup");
})

app.post("/signup",async(req,res)=>{
  const {username,email,password}= req.body;
  await users.create({
    username,
    email,
    password
  });
  res.redirect("/login");
});







app.use(express.static("public/css/"));
app.use(express.static("./storage")); //to permit the storage file
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
