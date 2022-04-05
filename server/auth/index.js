const router = require('express').Router()

const { models: { Account } } = require('../db')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    console.log("body",req.body)
    const loginInfo = {username:'kenken',password:'123456'}//{ username: req.body.username, password: req.body.password }
    const result = { token: await Account.authenticate(loginInfo) }
    console.log("result",result)
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get('/me', async (req,res, next)=>{
  try {
    res.send(await Account.findByToken(req.headers.authorization))
  } catch (error) {
    next(error)
  }
})
