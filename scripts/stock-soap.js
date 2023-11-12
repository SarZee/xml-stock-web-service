const soap = require('soap');
const db = require('./stock-db');

const service = {
    StockService: {
        StockPort: {
            AddItem: (Item, callback) => {
                db.run(`INSERT INTO inventory (
                    ID_product, 
                    Product_name,
                    Product_price,
                    Expire_date,
                    Product_quantity,
                    Product_status) VALUES (?, ?, ?, ?, ?, ?);`,

                    [Item.ID_product, 
                    Item.Product_name,
                    Item.Product_price,
                    Item.Expire_date,
                    Item.Product_quantity,
                    Item.Product_status], 

                    (err) => {
                        if (err)
                            callback ({ result: 'Cannot Add Item: ' + err.message });
                        else
                            callback ({ result: '<p>Item Added.</p>' , Item });
                    });
            } ,
            UpdateItem: (Item) => {
                return { result: 'Item Updated.' + Item };
            } ,
            AddShipCost: (ShipCost) => {
                return { result: 'Shipping cost Added.' + ShipCost };
            } ,
            AddOrder: (Order) => {
                return { result: 'Order Added.' + Order };
            } ,
            ConfirmOrder: (OrderID) => {
                return { result: 'Order Confirmed.' + OrderID };
            } ,
            RequestCancelOrder: (OrderID) => {
                return { result: 'Incoming Request Order Cancel.' + OrderID };
            } ,
            CancelOrder: (OrderID) => {
                return { result: 'Order Canceled.' + OrderID };
            }
        }
    }
}

const path = '/stock-service/api';

const wsdl = require('fs').readFileSync('./wsdl/stock.wsdl', 'utf-8');

function listen(server) {
    soap.listen(server, path, service, wsdl);
};

module.exports = { soap , listen }