exports.renderLogin = (req, res) => {
  res.render("login");
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const check = await users.findAll({
    where: {
      email: email,
    },
  });
  if (check.length == 0) {
    res.send("Email not found");
  } else {
    const match = bcrypt.compareSync(password, check[0].password);
    if (match) {
      res.send("Login Successful");
    } else {
      res.send("Incorrect Password");
    }
  }
};

exports.renderSignup = (req, res) => {
  res.render("signup");
};

exports.signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  await users.create({
    username,
    email,
    password: bcrypt.hashSync(password, 8),
  });
  res.redirect("/login");
};
