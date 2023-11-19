const soap = require('soap');

const wsdl = 'http://localhost:8000/stock-service?wsdl';

const order = {
    ID_order: "PT131"
};

const options = {
    debug: true,
};

soap.createClient(wsdl, options, (err, client) => {
    if (err) {
        console.error(`Client error: ${err.message}`);
    } else {
        client.on('request', (xml) => {
            console.log('SOAP Request:');
            console.log(xml);
        });

        client.on('response', (xml) => {
            console.log('SOAP Response:');
            console.log(xml);
        });

        client.CancelOrder(order, (err) => {
            if (err)
                console.error(`Error updating order status: `, err.message);
            else
                console.log(`Order status updated.`);
        });
    }
});
