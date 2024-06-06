const Sequelize = require('sequelize');
const dbConfig = require('./../dbConfig');

const Country = dbConfig.define('country', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    country_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Country;