var express = require("express");
var views = require("./views.js")
var app = express();
app.use(express.logger());

app.get('/', views.home);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
