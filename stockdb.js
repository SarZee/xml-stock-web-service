const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('stock.db', (err) => {
    if (err)
        console.error('Cannot connect to database:', err.message);
    else
        console.log('Connected to database.');
});

module.exports = db;