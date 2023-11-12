const express = require('express');
const server = express();
const soap = require('./stock-soap');

soap.listen(server);

server.listen(8000, () => {
    console.log('Server Initialized.');
});
