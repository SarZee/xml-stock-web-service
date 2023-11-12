const express = require('express');
const server = express();
const soap = require('./scripts/stock-soap');
const router = require('./scripts/routes');

server.use('/stock-service/api', router);

soap.listen(server);

server.listen(8000, () => {
    console.log('Server Initialized.');
});
