const express = require('express');
const server = express();
const soap = require('./scripts/stock-soap');

soap.listen(server);

server.listen(8000, () => {
    console.log('Server Initialized.');
});
