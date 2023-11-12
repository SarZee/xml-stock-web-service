const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('stock.db', (err) => {
    if (err)
        console.error('Cannot connect to database:', err.message);
    else
        console.log('Connected to database.');
});

db.run(`CREATE TABLE IF NOT EXISTS inventory (
	ID_product INTEGER,
	Product_name TEXT,
	Product_price INTEGER,
	Expire_date TEXT,
	Product_quantity INTEGER,
	Product_status TEXT);`
);

db.run(`CREATE TABLE IF NOT EXISTS header (
	ID_Shipment INTEGER,
	Name TEXT,
	Address TEXT,
	Tel TEXT,
	Order_date TEXT,
	Send_date TEXT,
	Shipment_cost INTEGER,
	Shipping_company TEXT,
	Tracker_number TEXT,
	Order_status TEXT);`
);

db.run(`CREATE TABLE IF NOT EXISTS detail (
	ID_order INTEGER,
	ID_product INTEGER,
	Product_name TEXT,
	Product_price INTEGER,
	Amount INTEGER,
	Total_price INTEGER);`
);

db.run(`CREATE TABLE IF NOT EXISTS master (
	Shipping_cost INTEGER);`
);

module.exports = db;