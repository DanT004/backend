const Sequelize = require('sequelize');
const config = require('../config');


const Todays_workout = config.define('Todays_workout',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
   exercise_id: {
    type: Sequelize.INTEGER,
    allowNull:true
   },
   user_id: {
    type: Sequelize.INTEGER,
    allowNull: true
   },
   exercises: {
    type: Sequelize.STRING,
    allowNull: true
   }
}, {timestamps: false});

module.exports = Todays_workout;