const { dbHost, dbPort, dbUser, dbPassword, dbDatabase } = require('./config');

module.exports = require('knex')({
  client: 'pg',
  connection: {
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbDatabase,
  },
});
