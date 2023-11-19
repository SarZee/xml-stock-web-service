const sqlite3 = require('sqlite3').verbose();

const service = {
    StockService: {
        StockPort: {
            AddItem: (args, callback) => addItem(args, callback),
            UpdateItem: (args, callback) => updateItem(args, callback),
            AddShippingCost: (args, callback) => addShippingCost(args, callback),
            AddOrder: (args, callback) => addOrder(args, callback),
            ConfirmOrder: (args, callback) => confirmOrder(args, callback),
            RequestCancelOrder: (args, callback) => requestCancelOrder(args, callback),
            CancelOrder: (args, callback) => cancelOrder(args, callback)
        }
    }
}

function addItem(args, callback) {
    const item = [
        args.ID_product,
        args.Product_name,
        args.Product_price,
        args.Product_quantity,
        args.Expire_date,
        args.Product_status
    ]

    // Add item in database
    const db = new sqlite3.Database('./database/stock.db');

    db.run(`INSERT INTO inventory (ID_Product, Product_name, Product_price, Product_quantity, Expire_date, Product_status) VALUES (?, ?, ?, ?, ?, ?)`,
    item, (err) => {
        if (err) {
            console.error(`Sqlite3 error: ${err.message}`);
            callback(err, { result: 'Error adding item.' });
        }
        else {
            console.log('Item added: ')
            console.table(item);
            callback(null, { result: 'Item added successfully.' });
        }

        db.close();
    });

    // Send data
}

function updateItem(args, callback) {
    const item = [
        args.Product_name,
        args.Product_price,
        args.Product_quantity,
        args.Expire_date,
        args.Product_status,
        args.ID_product
    ]

    // Update item in database
    const db = new sqlite3.Database('./database/stock.db');

    db.run(`UPDATE inventory SET Product_name = ?, Product_price = ?, Product_quantity = ?, Expire_date = ?, Product_status = ? WHERE ID_product = ?`,
    item, (err) => {
        if (err) {
            console.error(`Sqlite3 error: ${err.message}`);
            callback(err, { result: 'Error updating item.' });
        }
        else {
            console.log('Item updated: ');
            console.table(item);
            callback(null, { result: 'Item updated successfully.' });
        }

        db.close();
    });

    // Send data
}

function addShippingCost(args, callback) {
    const shippingCost = [
        args.ID_shipment,
        args.Shipping_cost
    ]

    // Add shipping cost in database
    const db = new sqlite3.Database('./database/stock.db');

    db.run(`INSERT INTO master (ID_shipment, Shipping_cost) VALUES (?, ?)`,
    shippingCost, (err) => {
        if (err) {
            console.error(`Sqlite3 error: ${err.message}`);
            callback(err, { result: 'Error adding shipping cost.' });
        }
        else {
            console.log('Shipping cost added: ')
            console.table(shippingCost);
            callback(null, { result: 'Shipping cost added successfully.' });
        }

        db.close();
    });

    // Send data
}

function addOrder(args, callback) {
    const orderHeader = [
        args.ID_shipment,
        args.Name,
        args.Address,
        args.Tel,
        args.ID_order,
        args.Order_date,
        args.Sent_date,
        args.Shipment_cost,
        args.Shipping_company,
        args.Track_no,
        'Pending'
    ];

    const orderDetail = args.details.map(detail => [
        args.ID_order,
        detail.ID_product,
        detail.Product_name,
        detail.Product_price,
        detail.Product_quantity,
        detail.Total_price
    ]);

    const db = new sqlite3.Database('./database/stock.db');

    db.run(`INSERT INTO header (ID_shipment, Name, Address, Tel, ID_order, Order_date, Sent_date, Shipment_cost, Shipping_company, Track_no, Order_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        orderHeader, (err) => {
            if (err) {
                console.error(`Sqlite3 error: ${err.message}`);
                callback(err, { result: 'Error adding header.' });
            } else {
                console.log('Order header added: ');
                console.table(orderHeader);

                orderDetail.forEach(detail => {
                    db.run(`INSERT INTO detail (ID_order, ID_product, Product_name, Product_price, Product_quantity, Total_price) VALUES (?, ?, ?, ?, ?, ?)`,
                        detail, (err) => {
                            if (err) {
                                console.error(`Sqlite3 error: ${err.message}`);
                                callback(err, { result: 'Error adding detail.' });
                            } else {
                                console.log('Order detail added: ');
                                console.table(detail);
                            }
                        });
                });

                callback(null, { result: 'Header and detail added successfully.' });
            }

        db.close();
    });

    // Send data
}

function confirmOrder(args, callback) {
    const order = [
        'Confirmed',
        args.ID_order
    ]

    // Update status in database
    const db = new sqlite3.Database('./database/stock.db');

    db.run(`UPDATE header SET Order_status=? WHERE ID_order=?`,
    order, (err) => {
        if (err) {
            console.error(`Sqlite3 error: ${err.message}`);
            callback(err, { result: 'Error updating order status.' });
        }
        else {
            console.log('Order status updated: ');
            console.table(order);
            callback(null, { result: 'Order status updated successfully.' });
        }

        db.close();
    });

    // Send data
}

function requestCancelOrder(args, callback) {
    const order = [
        'Cancelled',
        args.ID_order
    ]

    // Update status in database
    const db = new sqlite3.Database('./database/stock.db');

    db.run(`UPDATE header SET Order_status=? WHERE ID_order=?`,
    order, (err) => {
        if (err) {
            console.error(`Sqlite3 error: ${err.message}`);
            callback(err, { result: 'Error updating order status.' });
        }
        else {
            console.log('Order status updated: ');
            console.table(order);
            callback(null, { result: 'Order status updated successfully.' });
        }

        db.close();
    });

    // Send data
}

function cancelOrder(args, callback) {
    const order = [
        'Cancelled',
        args.ID_order
    ]

    // Update status in database
    const db = new sqlite3.Database('./database/stock.db');

    db.run(`UPDATE header SET Order_status=? WHERE ID_order=?`,
    order, (err) => {
        if (err) {
            console.error(`Sqlite3 error: ${err.message}`);
            callback(err, { result: 'Error updating order status.' });
        }
        else {
            console.log('Order status updated: ');
            console.table(order);
            callback(null, { result: 'Order status updated successfully.' });
        }

        db.close();
    });

    // Send data
}

module.exports = service;