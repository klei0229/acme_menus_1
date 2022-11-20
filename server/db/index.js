const conn = require("./conn");
const User = require("./User");
// const BusinessAccount = require("./BusinessAccount");
const Restaurant = require("./Restaurant");
const Dish = require("./Dish");
// const Product = require("./Product");
// const Order = require("./Order");
// const LineItem = require("./LineItem");
const fs = require("fs");
const path = require("path");

const csvFilePath = "./server/db/menu.csv";
const csv = require("csvtojson");
const { json } = require("sequelize");


//Associations:
Dish.belongsTo(Restaurant);
Restaurant.hasMany(Dish);
User.hasMany(Restaurant);
// Restaurant.hasOne(User);

const getImage = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "base64", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  // const avatar = await getImage(path.join(__dirname, "../../prof-avatar.png"));

  //Seed Users
  const kevin = await User.create({
    username: "kevin",
    password: "123",
  });

  const moe = await User.create({
    username: "moe",
    password: "123",
    // isAdmin: false,
  });

  //Seed Restaurants
  const [timhowan,piccoli] = await Promise.all([
    Restaurant.create({ name: "Tim Ho Wan" }),
    Restaurant.create({ name: "Picocoli Trattoria" }),
  ]);

  timhowan.userId = kevin.id;
  piccoli.userId = kevin.id;
  // taquitos.userId = kevin.id;

  await timhowan.save();
  await piccoli.save();
  // await taquitos.save();


  //Seed Dishes
  const jsonArray = await csv().fromFile(csvFilePath);
  jsonArray.forEach(async (dish) => {
    await Dish.create(dish);
    // console.log(dish);
  });
};





module.exports = {
  syncAndSeed,
  User,
  Restaurant,
  Dish,
  // BusinessAccount
};
