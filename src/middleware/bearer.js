'use strict';

module.exports = async (req, res, next) => {
  try {
    if(!req.headers.authorization){ return _authError()};
    const token = req.headers.authorization.split(' ').pop();

    // const validUser = await 

  } catch (error) {

  }
};

const _authError = () => {
  next('invalid login');
}