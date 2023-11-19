const soap = require('soap');

const wsdl = 'http://localhost:8000/stock-service?wsdl';

const shipCost = {
    ID_shipment: "SHIP1",
    Shipping_cost: 4.9
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

        client.AddShippingCost(shipCost, (err) => {
            if (err)
                console.error(`Error adding shipping cost: `, err.message);
            else
                console.log(`Shipping cost added.`);
        });
    }
});
