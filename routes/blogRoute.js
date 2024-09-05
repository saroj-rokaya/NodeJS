const { homepage, createpage, singleBlog, createBlog, deleteBlog } = require("../controller/blogController.js");

const router = require("express").Router();

router.route("/").get(homepage);
router.route("/singleBlog/:id").get(singleBlog);
router.route("/delete/:id").get(deleteBlog);
router.route("/create").get(createpage).post(createBlog);
