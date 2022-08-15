const Sequelize = require('sequelize')
const db = require('../../db')

const Thread = db.define('thread', {
  openStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
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
  views: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
}, {
  timestamps: false
});


module.exports = Thread
