const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");

module.exports = app;

app.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const user = req.user;
    const menus = await user.getMenus();

    res.send(menus);


    // await user.createMenu(string);
  } catch (ex) {
    next(ex);
  }
});

