import express = require('express');
import r = require('rethinkdb');

const router = express.Router();
const table = r.table('todos');

router
	.get('/', async (req, res) => {
		const tableCursor = await table.run(req.app.locals.dbConn);
		res.send(await tableCursor.toArray());
	})
	.get('/:id', async (req, res) => {
		res.send(await table.get(req.params.id).run(req.app.locals.dbConn));
	})
	.post('/', async (req, res) => {
		const insert = await table.insert(req.body).run(req.app.locals.dbConn);
		res.send(insert.generated_keys);
	})
	.patch('/:id', async (req, res) => {
		await table
			.get(req.params.id)
			.update(req.body)
			.run(req.app.locals.dbConn);
		res.send();
	})
	.delete('/:id', async (req, res) => {
		await table
			.get(req.params.id)
			.delete()
			.run(req.app.locals.dbConn);
		res.send();
	});

export default router;
