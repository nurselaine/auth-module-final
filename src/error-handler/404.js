'use strict';


// A function built to explicitly export as a json object.

function handle404(req, res, next) {
  const objectError = {
    status: 404,
    message: 'Sorry, item not found'
  };
  res.status(404).json(errorObject);
}

module.exports = handle404;
