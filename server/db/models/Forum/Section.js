const Sequelize = require('sequelize')
const db = require('../../db')


const Section = db.define("section", {
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

module.exports = Section
