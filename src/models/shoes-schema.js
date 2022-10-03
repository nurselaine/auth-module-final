'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Shoes', {
    name: {
      type: DataTypes.STIRNG,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};