const express = require('express');
const app = express.Router();
const { Dish } = require('../db');
const { isLoggedIn } = require('./middleware');

module.exports = app;

app.get('/', async(req, res, next)=> {
  try {
    res.send(await Dish.findAll());
  }
  catch(ex){
    next(ex);
  }
});