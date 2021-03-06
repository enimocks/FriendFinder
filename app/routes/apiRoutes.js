// LOAD DATA ===================================================================
const friends = require("../data/friends");

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {

    res.json(friends);
  });

  // Friend finding logic
  app.post('/api/friends', function (req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 100
    };

    // Here we take the result of the user's survey POST and parse it.
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    // This variable will calculate the difference between the user's scores and the scores of
    // each user in the database
    var totalDifference = 0;

    // Here we loop through all the friend possibilities in the database. 
    for (var i = 0; i < friends.length; i++) {

      // console.log(friends[i].name);
      totalDifference = 0;

      // We then loop through all the scores of each friend
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(userScores[j] - friends[i].scores[j]);

        // If the sum of differences is less then the differences of the current "best match"
        // console.log(totalDifference);

        if (totalDifference <= bestMatch.friendDifference) {
          // Reset the bestMatch to be the new friend. 
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friends.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
    res.json(bestMatch);
    // console.log(bestMatch);
    // console.log(userData);

  });

}