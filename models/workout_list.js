const Sequelize = require('sequelize');
const config = require('../config');


const Workout_list = config.define('Workout_list', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    list_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, { timestamps: false });

module.exports = Workout_list;