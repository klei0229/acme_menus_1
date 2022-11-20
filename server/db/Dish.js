const conn = require('./conn');
const { STRING, UUID, UUIDV4, TEXT } = conn.Sequelize;

const Dish = conn.define('dish', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },

  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  secondaryname: {
    type: STRING,

  },

  imageurl: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  description: {
    type: TEXT,

  },

  price: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = Dish;
