const soap = require('soap');

const service = {

}

const path = '/stock-service';

const wsdl = require('fs').readFileSync('./wsdl/stock.wsdl', 'utf-8');

function listen(app) {
    soap.listen(app, path, service, wsdl);
};

module.exports = { soap, listen }