const db = require('./stock-db');

function addItem(Item, callback) {
    db.connect();

    db.run(`INSERT INTO inventory (
            ID_product, 
            Product_name,
            Product_price,
            Expire_date,
            Product_quantity,
            Product_status) 
            VALUES (?, ?, ?, ?, ?, ?);`,

       [Item.ID_product, 
        Item.Product_name,
        Item.Product_price,
        Item.Expire_date,
        Item.Product_quantity,
        Item.Product_status], 

        (err) => {
            if (err)
                callback({ result: 'Cannot Add Item: ' + err.message });
            else
                callback({ result: '<p>Item Added.</p>' , Item });
            
            db.close();
        }
    );
}

function updateItem(Item, callback) {
    db.connect();

    db.run(`UPDATE inventory 
            SET
            Product_name = ?,
            Product_price = ?,
            Expire_date = ?,
            Product_quantity = ?,
            Product_status = ?
            WHERE ID_product = ?`,

       [Item.Product_name,
        Item.Product_price,
        Item.Expire_date,
        Item.Product_quantity,
        Item.Product_status,
        Item.ID_product],

        (err) => {
            if (err)
                callback({ result: 'Cannot Update Item: ' + err.message });
            else
                callback({ result: '<p>Item Updated.</p>' + Item });

            db.close();
        }
    );
}

module.exports = { addItem, updateItem }