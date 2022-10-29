"use strict";

module.exports = (app) => {
  var calculator = require("../controllers/CalculatorController.js");

  //Root router
  app.get("/", (req, res) => {
    res.send("Main Page");
  });

  //Calculator Operation
  app.route("/operation/addByTwoParams").get(calculator.addOperationByTwoParams);
  app.route("/operation/subtractByTwoParams").get(calculator.subtractOperationByTwoParams);
  app.route("/operation/multiplyByTwoParams").get(calculator.multiplyOperationByTwoParams);
  app.route("/operation/divideByTwoParams").get(calculator.divideOperationByTwoParams);
  app.route("/operation/addByList").get(calculator.addByList);
  app.route("/operation/subtractByList").get(calculator.subtractByList);
  app.route("/operation/multiplyByList").get(calculator.multiplyByList);
  app.route("/operation/divideByList").get(calculator.divideByList);


  // Handling 404 request from the client
  app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
  });
};