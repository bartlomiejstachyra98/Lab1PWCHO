var express = require('express');
var app = express();
let date_ob = new Date();

const date = new Date();
let timezone;

const axios = require('axios');

axios.get('http://ip-api.com/json')
    .then(res => {
        timezone = res.data.timezone;
    })
    .catch(error => {
        console.error(error);
    });

app.get('/', function(req, res) {
    const remoteAddress = req.socket.remoteAddress;
    const array = remoteAddress.split(':')
    const remoteIP = array[array.length -1]


    res.send( ' Ip: ' + remoteIP + " data: " + date.toLocaleString('en-US', {
        timeZone: timezone,
        dateStyle: 'full',
        timeStyle: 'full',
    }),);
});
 
const port = process.env.port || 3500;

app.listen(port, function() {
    console.log(date_ob + ' autor: Bartlomiej Stachyra port: ', this.address().port);
});
