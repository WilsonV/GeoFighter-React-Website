const express = require("express");
const app = express();

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("*",(req,res)=>{
  res.sendFile('../public/index.html')
})

module.exports = app;
