const express = require("express");
const app = express.Router();
const { Restaurant, User, Dish } = require("../db");
const { isLoggedIn } = require("./middleware");

module.exports = app;

app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.getRestaurants());
  } catch (ex) {
    next(ex);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    // console.log('id is'+req.params.id);
    const menu = await Restaurant.findByPk(req.params.id,{
      include:{
        model: Dish
      }
    });
    
    // console.log(menu);
    res.send(menu);
  
  } catch (ex) {
    next(ex);
  }
});
