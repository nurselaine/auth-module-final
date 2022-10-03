'use strict';

// ************** Requires *******************
const { ShoesModel } = require('./index');
const express = require('express');
const router = express.Router();
const bearerAuth = require('../middleware/bearer');
const permission = require('../middleware/access-control');

// ************* handlers ******************
router.get('/shoes', bearerAuth, async (req, res, next) => {
  // retrieves all available shoe data to READ
});

router.get('/shoes/:id', bearerAuth, async (req, res, next) => {
  // retrieves one shoe data to READ
});

router.post('/shoes', bearerAuth, permission('writer'), async (req, res, next) => {
  // Creates a new shoes instance and adds to database
});

router.put('/shoes/:id', bearerAuth, permission('writer'), async (req, res, next) => {
  // update shoe with given ID
});

router.delete('/shoes/:id', bearerAuth, permission('writer'), async (req, res, next) => {
  // deletes a given shoe 
});

module.exports = router;