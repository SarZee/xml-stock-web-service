const express = require('express');
const server = express();
const db = require('./stockdb');
const soap = require('./stock-soap');

server.listen(() => {
    soap.listen(server, () => {
        console.log('Server Initialized.')
    });
});