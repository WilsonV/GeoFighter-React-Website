require('dotenv').config();
const express = require("express");
const app = express();
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes auth
app.use('/auth', require('./auth'))
app.use('/forum', require('./forum'))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
// })

app.use(express.static(path.join(__dirname, "..", "public")))

// sends index.html for non valid url
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

//Handle errors
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})


module.exports = app;
