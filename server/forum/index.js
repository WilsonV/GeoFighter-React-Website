const router = require('express').Router()
const { isRegisteredUser } = require('./gateKeepers')

const { models: { Forum: { Category, Section, Thread } } } = require('../db')
const sequelize = require('sequelize')

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
