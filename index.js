// set up database connection and server connection
const { start } = require('./src/server');
const { sequelize } = require('./src/models/index');

sequelize.sync()
  .then(() => {
    console.log('succesfully connected to db!');
  
    start();
  })