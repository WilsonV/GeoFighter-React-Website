const router = require('express').Router()
const { isRegisteredUser } = require('./gateKeepers')

const { models: { Forum: { Category, Section, Thread } } } = require('../db')
const sequelize = require('sequelize')
const Account = require('../db/models/Account')

module.exports = router

router.get('/categories', isRegisteredUser, async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Section,
        as: 'sections'
      }
    })
    res.send(categories)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.get('/threads', isRegisteredUser, async (req, res, next) => {
  try {
    console.log("Params", req.query)
    const threads = await Thread.findAll({
      where: { sectionId: req.query.sectionId },
      include: {
        model: Account,
        as: 'author',
        attributes: ['username']
      }
    })
    res.send(threads)
  } catch (error) {
    console.log(error)
    next(error)
  }
})
