const express = require("express");
const Router = express.Router();
const {
  handleUserSignup,
  handleloginSignup,
} = require("../Controllers/user.js");

Router.post("/", handleUserSignup);
Router.post("/login", handleloginSignup);

module.exports = Router;
