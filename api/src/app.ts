import express = require('express');
import cors = require('cors');
import db from './db';
import todos from './routers/todos';

const app = express();

const init = async () => {
	app.locals.dbConn = await db();
	app.use(express.json());
	app.use(cors());
	app.use('/todos', todos);
	app.listen(3000, () => {
		console.log('Server listening on localhost:3000');
	});
};

init();
