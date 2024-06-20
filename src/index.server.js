const fs = require('fs');
const path = require('path');
const compression = require('compression');
var cookieParser = require('cookie-parser');
const express = require('express');

require('dotenv').config();
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const routesPath = path.join(__dirname, 'routes');
fs.readdir(routesPath, (err, files) => {
	if (err) {
		console.error('Erro ao ler a pasta routes:', err);
		return;
	}

	files.forEach((file) => {
		const path = file.split('.')[0];
		const url = path === 'index' ? '/' : `/${path}`;
		app.use(url, require(`./routes/${file}`));
	});
});

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
	const serverHost = process.env.SERVER_URI || 'http://localhost';
	console.log(`Api is running on ${serverHost}:${port}`);
});
