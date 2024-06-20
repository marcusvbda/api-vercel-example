const jwt = require('jsonwebtoken');

const controller = {
	signin(req, res) {
		const { username, password } = req.body;
		if (username === 'user' && password === 'pass') {
			const token = jwt.sign({ username }, process.env.TOKEN_SECRET);
			return res.json({ token });
		}
		res.status(401).json({ error: 'Invalid credentials' });
	},
	check(req, res) {
		res.json({ success: 'true' });
	},
};

module.exports = controller;
