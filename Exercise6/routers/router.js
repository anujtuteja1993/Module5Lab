"use strict";

module.exports = (app) => {
  var football = require("../controllers/footballController");

  //Root router
  app.get("/", (req, res) => {
    res.send("Main Page");
  });

  app.route("/apiFootball").get(football.getFootballHighlights);


  // Handling 404 request from the client
  app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
  });
};