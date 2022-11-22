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
