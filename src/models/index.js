'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const shoes = require('./shoes-schema');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const options = {logging: false};
const sequelize = new Sequelize(DATABASE_URL);
const ShoesModel = shoes(sequelize, DataTypes);

module.exports = {
  sequelize,
  DataTypes,
  ShoesModel,
}

