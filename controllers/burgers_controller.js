

function Routes (app) {
	var burgers = require("../models/burgers.js");

	app.get("/", function(req, res) {
		burgers.selectAll(function(data) {
			res.render("index", {allburgers: data});		
		});
		
	});

	app.post("/new", function(req, res) {
		burgers.insertOne(req.body.burger, function(data) {
			console.log(req.body.burger)
			res.json(data);
		})
	});

	app.put("/update/:id", function(req, res) {
		burgers.updateOne(req.params.id, function(data) {
		    res.json(data);
		})
	});

}

module.exports = Routes;