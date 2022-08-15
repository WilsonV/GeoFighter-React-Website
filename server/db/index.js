const db = require('./db')
const Account = require('./models/Account')
const Category = require('./models/Forum/Category')
const Section = require('./models/Forum/Section')
const Thread = require('./models/Forum/Thread')

Category.hasMany(Section)
Section.belongsTo(Category)
Section.hasMany(Thread)
Account.hasMany(Thread)
Thread.belongsTo(Account, { foreignKey: 'accountId', as: 'author' })
Thread.belongsTo(Section)

module.exports = {
  db,
  models: {
    Account,
    Forum: {
      Category,
      Section,
      Thread
    }
  },
}
