const soap = require('soap');

const wsdl = 'http://localhost:8000/stock-service?wsdl';

const order = {
    "ID_shipment": 'SHIP131',
    "ID_order": 'PT131',
    "Name": "John Doe",
    "Address": "123 Main Street, Bangkok, 10330",
    "Tel": "081-234-5678",
    "Order_date": "2023-10-14",
    "Sent_date": "2023-10-21",
    "Total_Price": 10000.9,
    "Discount": 0.55,
    "Vat": 0.07,
    "Shipment_cost": 100.0,
    "Shipping_company": "Kerry",
    "Track_no": "IW4NT25L33P",
    "Net_balance": 9730.0,
    "details": [
      {
        "ID_product": 'PD10',
        "Product_name": "Product Name 1",
        "Product_description": "Description of Product 1",
        "Product_quantity": 1,
        "Product_price": 49900.0,
        "Discount": 1000.0,
        "Total_price": 48900.0
      },
      {
        "ID_product": 'PD20',
        "Product_name": "Product Name 2",
        "Product_description": "Description of Product 2",
        "Product_quantity": 2,
        "Product_price": 3500.0,
        "Discount": 500.0,
        "Total_price": 6500.0
      }
    ]
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

        client.AddOrder(order, (err) => {
            if (err)
                console.error(`Error adding order: `, err.message);
            else
                console.log(`Order added.`);
        });
    }
});
