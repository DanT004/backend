const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const config = require('../config');


const Todays_workout = config.define('Todays_workout', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    t1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t4: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t5: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t6: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t7: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t8: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t9: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t10: {
        type: Sequelize.STRING,
        allowNull: true
    },
    t11: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    // exercises: {
    //     type: Sequelize.STRING,
    //     allowNull: true
    // },
    // date_created: {
    //     type: Sequelize.DATE,
    //     allowNull: true
    // }
}, { timestamps: false });

module.exports = Todays_workout;