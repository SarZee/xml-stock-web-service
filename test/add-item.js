const soap = require('soap');

const url = 'http://localhost:8000/stock-service/api/?wsdl';

const item1 = {
        ID_product: 1,
        Product_name: 'Test Product',
        Product_price: 10,
        Expire_date: '2023-12-31',
        Product_quantity: 50,
        Product_status: 'In Stock'
};

soap.createClient(url, (err, client) => {
    if (err)
        console.error(err);
    else
        client.AddItem(item1, (err, result) => {
            if (err)
                console.error(err);
            else
                console.log(result);
        });
});
