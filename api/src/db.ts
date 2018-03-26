import r = require('rethinkdb');

const tables = [
	{
		name: 'todos',
		indices: ['due']
	}
];

const initializeDb = async (dbName = 'main') => {
	// Initialize connection
	const conn = await r.connect({db: dbName});

	// Create DB if not exists
	const dbList = await r.dbList().run(conn);
	if (!dbList.includes(dbName)) {
		await r.dbCreate(dbName).run(conn);
	}

	// Create tables if not exists
	const db = r.db(dbName);
	const tableList = await db.tableList().run(conn);
	for (const {name, indices} of tables) {
		if (!tableList.includes(name)) {
			await db.tableCreate(name).run(conn);
		}
		const table = db.table(name);
		const indexList = await table.indexList().run(conn);
		for (const index of indices) {
			if (!indexList.includes(index)) {
				await table.indexCreate(index).run(conn);
				await table.indexWait(index).run(conn);
			}
		}
	}

	return conn;
};

export default initializeDb;
