const router = require("express").Router();
const { singleBlog, createBlog, deleteBlog, homePage, createPage } = require("../controller/blogController.js");
const { multer, storage } = require("../middleware/multerConfig.js");
const upload = multer({ storage: storage });


router.route("/").get(homePage);
router.route("/singleBlog/:id").get(singleBlog);
router.route("/delete/:id").get(deleteBlog);
router.route("/create").get(createPage).post(upload.single('image'),createBlog);

module.exports = router;