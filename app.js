const express = require("express");
require("dotenv").config();
const { blogs } = require("./model/index");
// const multer = require("./middleware/multerConfig").multer;
// const storeate = require("./middleware/multerConfig").storage
const app = express();
const {multer,storage}=require("./middleware/multerConfig.js")
const upload = multer({storage:storage});


app.use(express.urlencoded({ extended: true }));//to understand url-encoded data
// app.use(express.json());//to understand json data
app.set("view engine", "ejs");
require("./model/index");

app.get("/",(req,res)=>{
  res.render("home");
})

app.get ("/create",(req,res)=>{
    res.render("create");
})

app.post("/create", upload.single('image') ,async(req,res)=>{
  // console.log(req.body);
  // const title = req.body.title
  // const subtitle = req.body.subtitle
  // const description = req.body.description  
  // const filename = req.file.filename //to get image data
  const {title,subtitle,description}=req.body;

  await blogs.create({
    title : title,
    subtitle : subtitle,
    description : description,
    image : req.file.filename  //req.file.path to get the path of the uploaded file, but not recommended for production. req.file.filename to get the name of the uploaded file.
    
    // title,
    // subtitle,
    // description
  })
  res.send("create blog added successfully");



})

app.use(express.static("public/css/"));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
