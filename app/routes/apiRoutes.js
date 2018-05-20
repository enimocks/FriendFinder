// LOAD DATA ===================================================================
const friends = require("../data/friends");

module.exports = function(app) {

  app.get('api/friends', function (req, res) {

    res.json(friends);
  });

  // Friend finding logic
  app.post('api/friends', function (req, res) {

    console.log(req.body);

  });

}