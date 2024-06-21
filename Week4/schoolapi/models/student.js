const Sequelize = require('sequelize');
const dbConfig = require('./../dbConfig');

const Student = dbConfig.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dept_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    country_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Student;