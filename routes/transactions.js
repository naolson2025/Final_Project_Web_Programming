var express = require('express');
// not sure if Finances is correct here
var Finances = require('../models').Finances;

var router = express.Router();

// Not sure if transactions is correct here
router.get('/transactions', function (req, res, next) {
    Finances.findAll({order: ['transaction']})
        .then(transactions =>{
            return res.json(transactions)
        })
        .catch(err => next.err())
});

// Not sure if this is necessary, think this loads the page for one single state, not needed for final project
// router.get('/states/:transactions', function (req, res, next) {
//     // Query that finds the state name in the database and returns json or not found error
//     Finances.findOne({where: {transaction: req.params.transaction}})
//         .then(state => {
//             if (state){
//                 return res.json(state)
//             } else {
//                 return res.status(404).send()
//             }
//         })
//         // handle other errors
//         .catch(err => next.err())
// });


// matches with /state/?anything?
// router.patch('/state/:name', function (req, res, next) {
//     // sends data if state has been vistited or not
//     States.update({visited: req.body.visited}, {where: {
//             name: req.params.name
//         }})
//         .then(rows =>{
//             if (rows){
//                 return res.send('ok')
//             } else {
//                 // if no rows are modified return 404
//                 return res.status(404).send()
//             }
//         })
//         // catch other errors
//         .catch(err => next.err())
// });

module.exports = router;
