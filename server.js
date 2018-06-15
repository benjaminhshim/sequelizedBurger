const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

var db = require("./models");

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
