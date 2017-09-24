//Get friends variable from people.js
var friends = require("../data/people.js");

//creating routes to get information about people currently stored as objects
module.exports = function (app) {
    //get information
    app.get("/api/:people", (request, response) => {
        var people = request.params.people;
        //use a switch case to figure out what to return
        switch (people) {
            case "emma":
                response.json(friends[0]);
                break;
            case "Emma":
                response.json(friends[0]);
                break;
            case "taylor":
                response.json(friends[1]);
                break;
            case "Taylor":
                response.json(friends[1]);
                break;
            case "jennifer":
                response.json(friends[2]);
                break;
            case "Jennifer":
                response.json(friends[2]);
                break;
            default:
                response.json(friends);
        }
    }); // app.get() ends here

    //create new user information object and add it to friends
    app.post("/api/:people", (req, res) => {
        var newUser = req.body;
        console.log("newUser");
        friends.push(newUser);
        var last = friends.length - 1;
        res.json(friends[last]);

        //compatibility logic
        //Use division for the logic
        var compatArr = [];
        for (i = 0; i < friends.length; i++) {
            //reinitialize compatibility for each friend
            var compat = 0;
            for (j = 0; j < friends[i].scores.length; j++) {
                var firstParam = friends.scores[j] / friends[last].score[j];
                var secondParam = parseFloat((firstParam / 5).toFixed(1));
                if (secondParam > 0.5) {
                    compat++;
                }
            } //end of jth loop
            compatArr.push(compat);
        } // end of ith loop
    }); // app.post() ends here


} // function(app) ends here