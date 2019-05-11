'use strict';

const Finances = [
  {
    description:"Pay Check 1",
    amount:1000
  },
  {
    description:"Pay Check 2",
    amount:1150
  },
  {
    description:"Dividens",
    amount:50
  },
  {
    description:"Rent",
    amount:750
  },
  {
    description:"Groceries",
    amount:350
  },
  {
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