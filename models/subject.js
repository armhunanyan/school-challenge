const DB = require('../database');

const { DataTypes, Model } = require('sequelize');

const Teacher = require('./teacher');

const Student = require('./student');

class Subject extends Model { }

Subject.init({
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
    tableName:"subjects",
    timestamps: false,
});

Subject.belongsTo(Teacher,{
    foreignKey: 'teacher_id'
});

Teacher.hasMany(Subject,{
    foreignKey: 'teacher_id'
});

Subject.belongsToMany(Student, {
    through: 'student_subject',
    as:"students",
    foreignKey: "subject_id",
    timestamps: false 
});

Student.belongsToMany(Subject, {
    through: 'student_subject',
    as:"subjects",
    foreignKey: "student_id",
    timestamps: false 
});

module.exports = Subject;