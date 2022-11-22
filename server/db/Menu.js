const conn = require("./conn");
const { STRING, UUID, UUIDV4, INT, TEXT } = conn.Sequelize;

const Menu = conn.define("menu", {
  data: {
    type: TEXT,
  },
});

module.exports = Menu;
