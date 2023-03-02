const Sequelize = require('sequelize');
const config = require('../config');


const Workout_list = config.define('Workout_list',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
   day_created: {
    type: Sequelize.DATE,
    allowNull: true
   },
   exercise_id: {
    type: Sequelize.INTEGER,
    allowNull:true
   },
   user_id: {
    type: Sequelize.INTEGER,
    allowNull: true
   },
   list: {
    type: Sequelize.STRING,
    allowNull: true
   }
}, {timestamps: false});

module.exports = Workout_list;