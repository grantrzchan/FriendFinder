//Dependencies
var path = require("path");


//Try to use hoisting later
module.exports = function (app) {
    //Brings user to the survey page
    app.get("/survey", (request, response) => {
        res.send(path.join("_dirname", "../public/survey.html"));
    });
    //Brings user to the home page
    app.get("/home", (request, response) => {
        res.send(path.join("_dirname", "../public/home.html"));
    });
}