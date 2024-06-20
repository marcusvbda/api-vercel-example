const jwt = require('jsonwebtoken');

const middleware = (req, res, next) => {
	const token = req.headers['authorization'];
	if (token) {
		const onlyToken = token.split('Bearer ')[1] || '';
		jwt.verify(onlyToken, process.env.TOKEN_SECRET, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					success: false,
					message: 'Token is not valid',
				});
			} else {
				req.auth = decoded;
				next();
			}
		});
	} else {
		return res.json({
			success: false,
			message: 'Auth token is not supplied',
		});
	}
};

module.exports = middleware;
