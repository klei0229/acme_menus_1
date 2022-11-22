const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");

module.exports = app;

app.post("/create", isLoggedIn, async (req, res, next) => {
  try {

    const user = req.user;

    const string = JSON.stringify(req.body);
    await user.createMenu(string);
  } catch (ex) {
    next(ex);
  }
});

