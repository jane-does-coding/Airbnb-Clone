const signupUser = async (req, res) => {
  const { name, email, password, username } = req.body;
  try {
    /*     const user = new User({
      name,
      email,
      username,
      password: password,
    }); */
    res.json("signup");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signupUser };
