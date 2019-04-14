var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static('dist'));
app.use('/assets', express.static(__dirname + '/assets'));


app.listen(3000);