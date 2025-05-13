const express = require("express");
const Router = express.Router();
const {
  handleShortURL,
  HandleAnalytics,
} = require("../Controllers/Controllers.js");

Router.post("/", handleShortURL);

Router.get("/analytics/:shortID", HandleAnalytics);

module.exports = Router;
