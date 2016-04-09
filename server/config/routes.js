var people = require('../controllers/people.js');

module.exports = function(app){
	app.get('/people', function (req, res){
		people.show_all(req, res);
	});

	app.get('/new/:name', function(req, res) {
		people.add(req, res, req.params.name);
	});

	app.get('/remove/:id', function(req, res) {
		people.remove(req, res, req.params.id);
	});

}
