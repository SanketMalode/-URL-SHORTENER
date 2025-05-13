const express = require("express");
const { URL } = require("../Models/UserModel.js");
const { restictToUser } = require("../Middlewares/auth.js");
const Router = express.Router();

Router.get("/admin/urls", restictToUser(["ADMIN"]), async (req, res) => {
  const allurls = await URL.find({});
  return res.render("index", {
    urls: allurls,
  });
});

Router.get("/", restictToUser(["NORMAL", "ADMIN"]), async (req, res) => {
  const allurls = await URL.find({ Createdby: req.user._id });
  return res.render("index", {
    urls: allurls,
  });
});

Router.get("/signup", (req, res) => {
  return res.render("signup");
});

Router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = Router;
