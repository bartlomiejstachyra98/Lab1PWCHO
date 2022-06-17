var express = require('express');
var app = express();
let date_ob = new Date();

const date = new Date();
let timezone;
let remoteIP;
const axios = require('axios');

axios.get('http://ip-api.com/json')
    .then(res => {
        timezone = res.data.timezone;
        remoteIP = res.data.query;
    })
    .catch(error => {
        console.error(error);
    });

app.get('/', function(req, res) {

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
