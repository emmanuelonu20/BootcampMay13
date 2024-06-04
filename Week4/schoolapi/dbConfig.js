const Sequelize = require('sequelize');

let databaseName = 'robomay24';
let username = 'root';
let password = '';

let dbConfig = new Sequelize(databaseName, username, password, {dialect: 'mariadb'});



module.exports = dbConfig;