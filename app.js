var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("Landing");

})


app.listen(3300, () => {
	console.log('server listening on port 3300');
});