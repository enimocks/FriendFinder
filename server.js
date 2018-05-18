// DEPENDENCIES =====================================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// EXPRESS CONFIGURATION =====================================================================

// create express server
const app = express();

// set an initial port either default or host's choice
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./app/public")));

// ROUTER ===========================================================
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER =========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});