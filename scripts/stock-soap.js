const soap = require('soap');
const stock = require('./stock-functions');

const service = {
    StockService: {
        StockPort: {
            AddItem: (Item, callback) => stock.addItem(Item, callback),
            UpdateItem: (Item, callback) => stock.updateItem(Item, callback),
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

module.exports = { soap, listen }