// ******* dependencies *************
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const badrequest = require('./error-handler/500');
const errorHandler = require('./error-handler/404');
const shoeRouter = require('./routes/shoes-router');
const userRouter = require('./routes/users-router');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;


// ********* routes ************

// app.use(userRouter);
app.use(shoeRouter);


// *********** Error handlers *************

// app.use('*', errorHandler);
// app.use(badrequest);

// ************* exports ******************

const start = () => {
  app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})
};

module.exports = { app, start };