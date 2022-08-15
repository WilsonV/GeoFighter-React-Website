const Sequelize = require('sequelize')
const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)

const Account = db.define('accounts', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  isBanned: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  timestamps: false
})

module.exports = Account


/*
    Instance Methods for Account model

*/

Account.prototype.correctPassword = function (candidtatePassword) {
  return bcrypt.compare(candidtatePassword, this.password);
}

Account.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT)
}

Account.prototype.checkIfBanned = async function () {
  const id = this.id
  if (!id) return true
  const user = await Account.findOne({
    attributes: ['isBanned'],
    where: { id }
  })
  if (!user) throw Error("Unable to verify user data")
  return user.isBanned
}

Account.authenticate = async function ({ username, password }) {
  console.log("Authenticate", username)
  const user = await this.findOne({ attributes: ['id', 'password'], where: { username } })
  //console.log("user is",user)
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password")
    error.status = 401
    throw error
  }
  console.log("generating user now")
  return user.generateToken()
}

Account.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    console.log("extracted id", id)
    const user = await Account.findByPk(id, { attributes: ['id', 'username'] });
    if (!user) {
      throw 'Failed to authenticate';
    }
    return user;
  } catch (ex) {
    console.log(ex)
    const error = Error('bad token');
    error.status = 401;
    throw error;
  }
};

const hashPassword = async (user) => {
  if (user.changed("password")) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    user.password = await bcrypt.hash(user.password, salt)
  }
}

Account.beforeCreate(hashPassword)
Account.beforeUpdate(hashPassword)
Account.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)))
