const DB = require('../database');

const { DataTypes, Model } = require('sequelize');

class Teacher extends Model { }

Teacher.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    }
}, {
    sequelize:DB,
    tableName:"teachers",
    timestamps: false,
});

module.exports = Teacher;