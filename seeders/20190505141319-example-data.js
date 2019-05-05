'use strict';

const Finances = [
  {
    "transaction":"Income",
    "description":"Pay Check 1",
    "amount":1000
  },
  {
    "transaction":"Income",
    "description":"Pay Check 2",
    "amount":1150
  },
  {
    "transaction":"Income",
    "description":"Dividens",
    "amount":50
  },
  {
    "transaction":"Expenses",
    "description":"Rent",
    "amount":750
  },
  {
    "transaction":"Expenses",
    "description":"Groceries",
    "amount":350
  },
  {
    "transaction":"Expenses",
    "description":"Car Loan",
    "amount":200
  }
];

module.exports = {
  up: (queryInterface, Sequelize) =>{
    var transactions = Finances.map(function (s) {
      s.createdAt = new Date();
      s.updatedAt = new Date();
      return s
    });

    return queryInterface.bulkInsert('Finances', transactions, {})
  },
  down: (queryInterface, Sequelize) => {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.
     */
    return queryInterface.bulkDelete('Finances', null, {});

  }
};