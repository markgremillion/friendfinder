var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');
var app= express();

var PORT = process.env.PORT|| 3000;

var jsonParser= bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({extended:false})


// Add middleware for parsing incoming request bodies
app.use(bodyParser.json({ type: 'application/*+jason'}))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html'}))

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)
// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Listening on Port:  ' + PORT);
});