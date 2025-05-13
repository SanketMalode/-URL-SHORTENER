const User = require("../Models/user.js");
const { setuser } = require("../Service/auth.js");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  return res.redirect("/");
}
async function handleloginSignup(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user)
    return res.render("login", { error: "Invalid Username or Password" });

  const token = setuser(user);

  res.cookie("token", token);
  return res.redirect("/");
}
module.exports = { handleUserSignup, handleloginSignup };
