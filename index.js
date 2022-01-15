// ----------------------------------
/*
TODO:
-Figure out how to save data n stuff
.so that you can save the list and not have it reset when you close the window
*/
// ----------------------------------

const fs = require('fs');
const express = require('express');
const path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(3000, function () {
    console.log('app is listening');
});

app.use(express.static(path.join(__dirname+'/public')));
