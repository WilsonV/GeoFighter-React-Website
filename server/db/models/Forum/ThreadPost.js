const Sequelize = require('sequelize')
const db = require('../../db')

const ThreadPost = db.define('threadpost', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  timestamps: false
})

module.exports = ThreadPost
