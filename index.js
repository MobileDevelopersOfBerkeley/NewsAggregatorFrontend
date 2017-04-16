var express = require("express");

const port = process.env.PORT || 8080;

var app = express();
app.use("/", express.static("app"));

var server = app.listen(port, function() {
});
