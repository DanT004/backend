const Sequelize = require('sequelize');
const config = new Sequelize("fitness_app", "root", "password", {dialect: 'mariadb'});

module.exports = config;