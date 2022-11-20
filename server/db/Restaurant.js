const conn = require('./conn');
const { STRING, UUID, UUIDV4, INT } = conn.Sequelize;


const Restaurant = conn.define('restaurant', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});


module.exports = Restaurant;
