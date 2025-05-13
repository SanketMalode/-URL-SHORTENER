
const jwt = require("jsonwebtoken");
const secret = "myVerySecretPrivateKey";

function setuser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getuser(token) {
  console.log("Token received in getuser:", token);

  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}
module.exports = {
  setuser,
  getuser,
};
