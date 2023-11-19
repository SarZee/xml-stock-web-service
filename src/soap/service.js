const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/stock.db');

const service = {
    StockService: {
        StockPort: {
            AddItem: function(args, callback) {
                
            },
            UpdateItem: function(args, callback) {

            },
            AddShippingCost: function(args, callback) {

            },
            AddOrder: function(args, callback) {

            },
            ConfirmOrder: function(args, callback) {

            },
            RequestCancelOrder: function(args, callback) {

            },
            CancelOrder: function(args, callback) {

            }
        }
    }
}

module.exports = service;