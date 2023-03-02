const Sequelize = require('sequelize');
const config = require('./../config');

const Exercise = config.define('Exercise',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    exe_cat_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: true
    },
    video: {
        type: Sequelize.STRING,
        allowNull: true
    },
    info: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {timestamps: false});

module.exports = Exercise;