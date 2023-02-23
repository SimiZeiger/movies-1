const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/movies', {
  
// logging will show the raw SQL code being written to the backend
logging: false,
});

module.exports = db;
