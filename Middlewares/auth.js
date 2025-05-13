const { getuser } = require("../Service/auth");

function checkforauth(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (!tokenCookie) {
    return next();
  }
  const token = tokenCookie;
  const user = getuser(token);

  req.user = user;
  return next();
}

function restictToUser(role = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!role.includes(req.user.role)) return res.end("UnAuthorized");

    next();
  };
}

module.exports = { checkforauth, restictToUser };
