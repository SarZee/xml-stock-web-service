const soap = require('soap');

const wsdl = 'http://localhost:8000/stock-service?wsdl';

const testItem = {
    ID_product: "PD14",
    Product_name: "iPhone 14 Pro Max",
    Product_price: 48000,
    Product_quantity: 80,
    Expire_date: "2025-10-25",
    Product_status: "In stock"
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

        client.UpdateItem(testItem, (err) => {
            if (err)
                console.error(`Error updating item: `, err.message);
            else
                console.log(`Item updated.`);
        });
    }
});
