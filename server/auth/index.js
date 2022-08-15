const router = require('express').Router()

const { models: { Account } } = require('../db')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    console.log("body", req.body)
    const loginInfo = { username: req.body.username, password: req.body.password }
    const result = { token: await Account.authenticate(loginInfo) }
    console.log("result", result)
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    console.log("attempting registry...")
    const signUpInfo = { username: req.body.username, password: req.body.password, email: req.body.email }
    const user = await Account.create(signUpInfo);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      console.log(err)
      next(err);
    }
  }
});

router.get('/me', async (req, res, next) => {
  try {
    console.log("looking for", req.headers.authorization)
    res.send(await Account.findByToken(req.headers.authorization))
  } catch (error) {
    next(error)
  }
})
