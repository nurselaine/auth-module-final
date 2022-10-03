'use strict';

module.exports = (error, req, res, next) {

  const error = error.message ? error.message : error;

  const errorObject = {

    status: message,
    message: error
  };
  
  res.status(500).json(errorObject);
};
