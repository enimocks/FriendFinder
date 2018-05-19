// DEPENDENCIES ================================================================
const path = require("path");

// LOAD DATA ===================================================================
const friends = require("../data/friends");

module.exports = function(app) {

  app.get('api/friends', function (res, req) {

    res.json(friends);
  });

  app.post('api/friends', function (res,req) {

    
  });

  
}