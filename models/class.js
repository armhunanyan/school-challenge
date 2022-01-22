const DB = require('../database');

const { DataTypes, Model } = require('sequelize');

const Teacher = require('./teacher');

class Clazz extends Model { }

Clazz.init({
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
    tableName:"classes",
    timestamps: false,
});

Clazz.belongsTo(Teacher,{
    foreignKey: 'teacher_id'
});

Teacher.hasMany(Clazz,{
    foreignKey: 'teacher_id'
});

module.exports = Clazz;