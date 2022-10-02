'use strict';

const base64 = require(base - 64);

const { users } = require('../models');

module.exports = aysnc(req, res, next) => {
  
  if (!req.headers.authorization) { return_authError(); }

  let basic = req.headers.authorization.split('').pop();
  let [user, pass] = base64.decode(basic).split(' : ');

  try {
    req.user = await users.authenticateBasic(user, pass)
    next();
  } catch (error) {
    _authError()
  }

  function authError() {
    res.status(403).send('Invalid Login');
  }

}