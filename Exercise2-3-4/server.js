require("dotenv").config();

const express = require("express");
const routes = require("./routers/router");
const app = express();
const swaggerUI = require('swagger-ui-express');
const port = process.env.PORT || 3000;

swaggerDocument = require('./swagger.json');

app.use('/', express.static('public')) //map everything in the public folder to the root endpoint, so it will load index.html
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes(app); //register the route

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error occurred", error);
  }
});