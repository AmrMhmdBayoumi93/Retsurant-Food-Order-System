  
  //.env
 const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
  //express
    const express = require('express');
    const app = express();
  const mongoose = require('mongoose');

  //middleware
  app.use(express.json());  // to build rest api and to parse json data from the request body

  

  
  //port
      // const PORT = process.env.PORT || 5000;
       const port = process.env.PORT;

  //db connection
  
async function DB_connection() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DataBase connected successfully");
  } catch (error) {
    console.log(error.message);
  }
}

  DB_connection();
  //run the server 

  app.listen(port, () => {
  console.log(`Server is connected on ${port}`);
});




