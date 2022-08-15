const router = require('express').Router()
const { isRegisteredUser } = require('./gateKeepers')

const { models: { Forum: { Category, Section, Thread } } } = require('../db')

module.exports = router

router.get('/categories', isRegisteredUser, async (req, res, next) => {
  try {
    const categories = await Category.findAll({ attributes: ['name'] })
    console.log("Found categories data is ", categories)
    res.send(categories)
  } catch (error) {
    next(error)
  }
})
