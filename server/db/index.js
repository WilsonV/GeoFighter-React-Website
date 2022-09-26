const db = require('./db')
const Account = require('./models/Account')
const Category = require('./models/Forum/Category')
const Section = require('./models/Forum/Section')
const Thread = require('./models/Forum/Thread')
const ThreadPost = require('./models/Forum/ThreadPost')

Category.hasMany(Section)
Section.belongsTo(Category)
Section.hasMany(Thread)
Account.hasMany(Thread)
Thread.belongsTo(Account, { foreignKey: 'accountId', as: 'author' })
Thread.belongsTo(Section)

ThreadPost.belongsTo(Account, { foreignKey: 'accountId', as: 'author' })
Account.hasMany(ThreadPost)
ThreadPost.belongsTo(Thread)
Thread.hasMany(ThreadPost)

module.exports = {
  db,
  models: {
    Account,
    Forum: {
      Category,
      Section,
      Thread,
      ThreadPost
    }
  },
}
