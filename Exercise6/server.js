require("dotenv").config();

const express = require("express");
const cors = require('cors')
const routes = require("./routers/router");
const app = express();
const port = process.env.PORT || 3000;

//Enable all cors for all request
app.use(cors())

routes(app); //register the route

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});