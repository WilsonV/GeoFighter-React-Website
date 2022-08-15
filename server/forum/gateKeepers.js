const Account = require('../db/models/Account')

const isRegisteredUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const user = await Account.findByToken(token)
    if (!user || await user.checkIfBanned()) throw Error("Invalid User Credentials")
    req.user = user
    next()
  } catch (error) {
    console.log(error)
    console.log('Not a valid user')
    next(error)
  }
}

module.exports = {
  isRegisteredUser
}
