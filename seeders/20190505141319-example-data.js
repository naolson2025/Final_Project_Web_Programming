'use strict';

const Finances = [
  {
    type: "Income",
    description:"Pay Check 1",
    amount:1000
  },
  {
    type: "Income",
    description:"Pay Check 2",
    amount:1150
  },
  {
    type: "Income",
    description:"Dividens",
    amount:50
  },
  {
    type: "Expense",
    description:"Rent",
    amount:750
  },
  {
    type: "Expense",
    description:"Groceries",
    amount:350
  },
  {
    type: "Expense",
    description:"Car Loan",
    amount:200
  }
];

module.exports = {
  up: (queryInterface, Sequelize) =>{

    var transactions = Finances.map(function (s) {
      s.createdAt = new Date();
      s.updatedAt = new Date();
      return s
    });

    return queryInterface.bulkInsert('Finances', transactions)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Finances', null, {});
  }
};