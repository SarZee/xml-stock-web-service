const soap = require('soap');

const wsdl = 'http://localhost:8000/stock-service?wsdl';

soap.createClient(wsdl, (err, client) => {
    if (err) {
        console.error(`SOAP client creation error: ${err.message}`);
    } else {
        console.log(client.describe());

        console.log(client.StockService.StockPort);
    }
});
