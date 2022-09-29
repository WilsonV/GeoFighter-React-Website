const router = require('express').Router()
const { isRegisteredUser } = require('./gateKeepers')

const { models: { Forum: { Category, Section, Thread } } } = require('../db')
const sequelize = require('sequelize')
const Account = require('../db/models/Account')
const ThreadPost = require('../db/models/Forum/ThreadPost')

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

router.get('/posts', isRegisteredUser, async (req, res, next) => {
  try {
    const threadPosts = await ThreadPost.findAll({
      where: { threadId: req.query.threadId },
      include: {
        model: Account,
        as: 'author',
        attributes: ['username']
      }
    })
    res.send(threadPosts)
  } catch (error) {
    console.log(error)
    next(error)
  }
})


router.post('/thread', isRegisteredUser, async (req, res, next) => {
  try {
    const userPostingId = await Account.getIdByToken(req.headers.authorization)

    console.log("posting in ", req.body, `for ${req.headers.authorization}`)
    await ThreadPost.create({
      title: "No Title",
      body: req.body.message,
      threadId: req.body.threadId,
      accountId: userPostingId,
      date: Date.now()
    })
    res.status(200).send()
  } catch (error) {
    console.log(error)
    next(error)
  }
})
