const express = require('express');
const server = express();
const port = 8000;

const soap = require('soap');
const path = '/stock-service';
const service = require('./soap/service');
const wsdl = require('fs').readFileSync('./wsdl/stock-service.wsdl', 'utf-8');

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database/stock.db');

server.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
    soap.listen(server, path, service, wsdl, () => {
        console.log(`Listening on SOAP service.`);
    });
});