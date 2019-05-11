'use strict';
module.exports = (sequelize, DataTypes) => {
  const Finances = sequelize.define('Finances', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.FLOAT
  }, {});
  Finances.associate = function(models) {
    // associations can be defined here
  };
  return Finances;
};