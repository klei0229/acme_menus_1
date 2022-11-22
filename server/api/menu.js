const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");

module.exports = app;

app.post("/create", isLoggedIn, async (req, res, next) => {
  // console.log("within api2");
  try {
    console.log("within api");

    const user = req.user;
    console.log(user.id);
    console.log(req.body);

    const string = JSON.stringify(req.body);
    console.log(string);
    await user.createMenu(string);
  } catch (ex) {
    next(ex);
  }
});

// app.get("/:id", async (req, res, next) => {
//   try {
//     // console.log('id is'+req.params.id);
//     const menu = await Restaurant.findByPk(req.params.id,{
//       include:{
//         model: Dish
//       }
//     });

//     // console.log(menu);
//     res.send(menu);

//   } catch (ex) {
//     next(ex);
//   }
// }
// );