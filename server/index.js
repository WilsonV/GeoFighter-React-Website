const app = require("./app")

const PORT = 3000;

const init = () =>{

  app.listen(PORT, ()=>{
    console.log(`Server Started on Port ${PORT}`)
  })

}


init();
