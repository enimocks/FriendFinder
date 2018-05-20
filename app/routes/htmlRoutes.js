// DEPENDENCIES ======================================================
const path = require('path');

// ROUTING ===========================================================
module.exports = function(app) {

  // default "catch-all" route that leads to home.html
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
  
  // a GET route to /survey to display the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

};