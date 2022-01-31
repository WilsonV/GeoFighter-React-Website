const app = require("./app")

const PORT = 8080;

const init = () =>{

  app.listen(PORT, ()=>{
    console.log(`Server Started on Port ${PORT}`)
  })

}


init();
