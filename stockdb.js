const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('stock.db', (err) => {
    if (err)
        console.error('Cannot connect to database:', err.message);
    else
        console.log('Connected to database.');
});

// add table if not exists
db.run(`CREATE TABLE IF NOT EXISTS inventory (
	ID_product INTEGER,
	Product_name TEXT,
	Product_price INTEGER,
	Expire_date TEXT,
	Product_quantity INTEGER,
	Product_status TEXT);`)

module.exports = db;