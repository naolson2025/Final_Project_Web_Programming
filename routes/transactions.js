var express = require('express');
// not sure if Finances is correct here
var Finances = require('../models').Finances;

var router = express.Router();

// Get all transactions from the database
router.get('/transactions', function (req, res, next) {
    Finances.findAll({order: ['amount', 'description']})
        .then(transactions =>{
            return res.json(transactions)
        })
        .catch(err => next(err))
});

// Adding a new transaction to the pie chart
router.post('/transaction', function (req, res, next) {
    Finances.create(req.body).then(result =>{
        return res.status(200).send('ok')
    })
    .catch(err => next(err))
});
// found on stack overflow
router.delete('/deleteTransaction', function (req, res, next) {
    Finances.destroy({where: {description: req.query.description}}).then( result =>{
        return res.send('ok')
    })
    .catch(err => next(err))
});
// removes all items from the db that have a specific type either 'Income' or 'Expense'
router.delete('/deleteAll', function (req, res, next) {
    Finances.destroy({where: {type: req.query.type}}).then( result =>{
       return res.send('ok')
   })
   .catch(err => next(err))
});

module.exports = router;
