const soap = require('soap');

const wsdl = 'http://localhost:8000/stock-service?wsdl';

soap.createClient(wsdl, (err, client) => {
    if (err) {
        console.error(`Client error: ${err.message}`);
    } else {
        console.log(`Services list: `);
        console.log(client.StockService.StockPort);
    }
});
