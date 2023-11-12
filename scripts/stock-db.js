const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('stock.db', (err) => {
    if (err)
        console.error('Cannot connect to database:', err.message);
    else
        console.log('Connected to database.');
});

db.run(`CREATE TABLE IF NOT EXISTS inventory (
	ID_product INTEGER NOT NULL,
	Product_name TEXT NOT NULL,
	Product_price INTEGER NOT NULL,
	Expire_date TEXT NOT NULL,
	Product_quantity INTEGER NOT NULL,
	Product_status TEXT NOT NULL);`
);

db.run(`CREATE TABLE IF NOT EXISTS header (
	ID_Shipment INTEGER NOT NULL,
	Name TEXT NOT NULL,
	Address TEXT NOT NULL,
	Tel TEXT NOT NULL,
	Order_date TEXT NOT NULL,
	Send_date TEXT NOT NULL,
	Shipment_cost INTEGER NOT NULL,
	Shipping_company TEXT NOT NULL,
	Tracker_number TEXT NOT NULL,
	Order_status TEXT NOT NULL);`
);

db.run(`CREATE TABLE IF NOT EXISTS detail (
	ID_order INTEGER NOT NULL,
	ID_product INTEGER NOT NULL,
	Product_name TEXT NOT NULL,
	Product_price INTEGER NOT NULL,
	Amount INTEGER NOT NULL,
	Total_price INTEGER NOT NULL);`
);

db.run(`CREATE TABLE IF NOT EXISTS master (
	Shipping_cost INTEGER NOT NULL);`
);

module.exports = db;