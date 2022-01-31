const express = require("express");
const app = express();
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "..","public")))

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.get("/test",(req,res)=>{

  res.send("<div><h1>Hi!</h1></div>")
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

module.exports = app;
