const Sequelize = require('sequelize')
const db = require('../../db')


const Category = db.define("category", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
}, {
  timestamps: false
});

module.exports = Category
