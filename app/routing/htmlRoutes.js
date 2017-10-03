//Dependencies
var path = require("path");


//Try to use hoisting later
module.exports = function (app) {
    //Brings user to the survey page
    app.get("/survey", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //Brings user to the home page
    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });
}