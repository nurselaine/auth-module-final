'use strict';

const base64 = require(base - 64);

const { users } = require('../../models');

module.exports = aysnc(req, res, next) => {
    console.log('basic auth');
    console.log(`auth - ${JSON.stringify(req.headers.authorization)}`)
  if (!req.headers.authorization) { return next('invalid login') };

  let basic = req.headers.authorization.split('').pop();
  let [user, pass] = base64.decode(basic).split(' : ');

  try {
    console.log('attempt to decode', base64.decode(basic));
    let [username, password ] = base64.decode(basic).split(':');
    req.user = await users.authenticateBasic(user, pass)
    next();
  } catch (error) {
    _authError()
  }

  function authError() {
    res.status(403).send('Invalid Login');
  }

}