var express = require('express');
var app = express();
let date_ob = new Date();
var satelize = require('satelize');
var timezone;

const date = new Date();


app.get('/', function(req, res) {
    const remoteAddress = req.socket.remoteAddress;
    const array = remoteAddress.split(':')
    const remoteIP = array[array.length - 1]
    satelize.satelize({ip:remoteIP}, function(err, payload) {
        timezone = payload.timezone;
    });
    res.send( ' Ip: ' + remoteIP + " data: " + date.toLocaleString('en-US', {
        timeZone: timezone,
        dateStyle: 'full',
        timeStyle: 'full',
    }),);
});
 
const port = process.env,port || 3000;

app.listen(port, function() {
    console.log(date_ob + ' autor: Bartlomiej Stachyra port: ', this.address().port);
});
