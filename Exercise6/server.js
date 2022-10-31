require("dotenv").config();

const express = require("express");
const cors = require('cors')
const routes = require("./routers/router");
const app = express();
const port = process.env.PORT || 3000;

//Enable all cors for all request
app.use(cors())

app.use('/', express.static('MiniProjectNode')) //map everything in this folder to the root endpoint, so it will load index.html

routes(app); //register the route

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});