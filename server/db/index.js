const db = require('./db')
const Account = require('./models/Account')

module.exports = {
  db,
  models: {
    Account,
  },
}
