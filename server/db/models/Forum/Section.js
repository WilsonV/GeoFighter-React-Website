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
  },
  description: {
    type: Sequelize.STRING,
    defaultValue: 'Description...',
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Section
