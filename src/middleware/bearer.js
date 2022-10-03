'use strict';

const { users } = require('../../models/index');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) { return next('invalid login'); }
  console.log('bearer auth');
  try {
    const token = req.headers.authorization.split(' ').pop();
    console.log(`token ${token}`);
    const validUser = await users.authenticateToken(token);
    console.log(`validUser ${validUser}`);
    req.user = validUser;
    req.token = validUser.token;
    console.log('hello');
    console.log(req.user);
    next();
  } catch (error) {
    _authError();
  }
  function _authError() {
    res.status(400).send(`Invalid Login`);
  }
};

