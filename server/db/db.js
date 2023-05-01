const Sequelize = require('sequelize')
const databaseUser = process.env.DATABASE_USER
const databasePass = process.env.DATABASE_PASSWORD
const databaseName = process.env.DATABASE_NAME

if (!databaseName) {

  throw new Error("No database name provided", databaseName)
}

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, { logging: false })

module.exports = db
