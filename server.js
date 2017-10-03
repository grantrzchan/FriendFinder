//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Use express
var app = express();

//body-parser alows server to interpret data sent ot it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//make the public folder accessible
app.use(express.static('public'));

//define port and express handle
port = process.env.port || 8000;
var app = express();

//require routes from htmlRoutes.js and apiRoutes.js 
var htmlRouting = require("./app/routing/htmlRoutes.js")(app);
console.log("hello");
var apiRouting = require("./app/routing/apiRoutes.js")(app);
console.log("hello2");

//initiate listener
app.listen(port, () => {
    console.log("App listening on PORT " + port);
});