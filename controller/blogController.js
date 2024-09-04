exports.homepage = async (req, res) => {
  const blogsData = await blogs.findAll();
  res.render("home", { blogdata: blogsData });
};

exports.createpage = (req, res) => {
  res.render("create");
};

exports.singleBlog = async (req, res) => {
  const id = req.params.id;
  const fullBlog = await blogs.findByPk(id);
  res.render("singleBlog", { fullBlog: fullBlog });
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/");
};

(exports.createBlog = upload.single("image")),
  async (req, res) => {
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
  };
