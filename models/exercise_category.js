const Sequelize = require('sequelize');
const config = require('./../config');


const Exercise_Category = config.define('Exercise_Category',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {timestamps: false});

module.exports = Exercise_Category;