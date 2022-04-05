const app = require("./app");
const {db} = require("./db");

const PORT = 3000;

const init = async () =>{

  try {
    await db.sync()
    app.listen(PORT, ()=>console.log(`Server Started on Port ${PORT}`))
  } catch (error) {
    console.error(error)
  }


}


init();
