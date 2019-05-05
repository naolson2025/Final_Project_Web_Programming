var express = require('express');
var bodyParser = require('body-parser');
var transactions_api = require('./routes/transactions.js');
var path = require('path');

var app = express();

// serves the Vue app
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use(bodyParser.json());

app.use('/api', transactions_api);

// error handlers

app.use(function (req, res, next) {
    res.status(404).send('Not found')
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Server error')
});


// Start server running
var server = app.listen(process.env.PORT || 3000, function () {
    console.log('app running on port', server.address().port)
});

