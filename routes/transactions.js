var express = require('express');
// not sure if Finances is correct here
var Finances = require('../models').Finances;

var router = express.Router();

// Not sure if transactions is correct here
router.get('/transactions', function (req, res, next) {
    Finances.findAll({order: ['amount', 'description']})
        .then(transactions =>{
            return res.json(transactions)
        })
        .catch(err => next.err())
});

// Adding a new transaction to the pie chart
router.post('/transaction', function (req, res, next) {
    Finances.create(req.body).then(result =>{
        return res.status(200).send('ok')
    })
    .catch(err => next(err))
});

module.exports = router;
