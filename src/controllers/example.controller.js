const controller = {
	index(req, res) {
		res.send('Test api');
	},
	helloWorld(req, res) {
		res.send('Hello world');
	},
};

module.exports = controller;
