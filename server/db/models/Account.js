const Sequelize = require('sequelize')
const db = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Account = db.define('accounts',{
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
    validate:{
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
})

module.exports = Account


/*
    Instance Methods for Account model

*/

Account.prototype.correctPassword = function(candidtatePassword){
  return bcrypt.compare(candidtatePassword, this.password);
}

Account.prototype.generateToken = function() {
  return jwt.sign({ id: this.id }, process.env.JWT)
}

Account.authenticate = async function({username, password}){
  console.log("Authenticate",username)
  const user = await this.findOne({attributes: ['id','password'], where: { username } })
  //console.log("user is",user)
  if(!user || !(await user.correctPassword(password))){
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
    console.log("extracted id",id)
    const user = await Account.findByPk(id,{attributes: ['id','username']});
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
