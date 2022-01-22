const DB = require('../database');

const { DataTypes, Model } = require('sequelize');

const Clazz = require('./class');

class Student extends Model { }

Student.init({
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
    tableName:"students",
    timestamps: false,
});

Student.belongsTo(Clazz,{
    foreignKey: 'class_id'
});

Clazz.hasMany(Student,{
    foreignKey: 'class_id'
});

module.exports = Student;