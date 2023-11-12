const soap = require('soap');
const db = require('./stockdb');

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
                    Product_status) VALUES (?, ?, ?, ?, ?, ?)`,

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
                            callback({ result: '<h3>Item Added.</h3>' , Item });
                    });
            } ,
            UpdateItem: (Item) => {
                return { result: '<h3>Item Updated.</h3>' + Item };
            } ,
            AddShipCost: (ShipCost) => {
                return { result: '<h3>Shipping cost Added.</h3>' + ShipCost };
            } ,
            AddOrder: (Order) => {
                return { result: '<h3>Order Added.</h3>' + Order };
            } ,
            ConfirmOrder: (OrderID) => {
                return { result: '<h3>Order Confirmed.</h3>' + OrderID };
            } ,
            RequestCancelOrder: (OrderID) => {
                return { result: '<h3>Request Order Cancel.</h3>' + OrderID };
            } ,
            CancelOrder: (OrderID) => {
                return { result: '<h3>Order Canceled.</h3>' + OrderID };
            }
        }
    }
}

const path = '/stock-service/api/';

const wsdl = require('fs').readFileSync('./wsdl/stock.wsdl', 'utf-8');

function listen(server) {
    soap.listen(server, path, service, wsdl);
};

module.exports = { soap, listen }