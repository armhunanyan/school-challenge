const DB = require('../database');

const { DataTypes, Model } = require('sequelize');

const Teacher = require('./teacher');
const Student = require('./student');
const Subject = require('./subject');

class Grade extends Model { }

Grade.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    grade: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize:DB,
    tableName:"grades",
    timestamps: false,
});

/* Relationship with Teacher */
Grade.belongsTo(Teacher,{
    foreignKey: 'teacher_id'
});
Teacher.hasMany(Grade,{
    foreignKey: 'teacher_id'
});

/* Relationship with Student */
Grade.belongsTo(Student,{
    foreignKey: 'student_id'
});
Student.hasMany(Grade,{
    foreignKey: 'student_id'
});

/* Relationship with Subject */
Grade.belongsTo(Subject,{
    foreignKey: 'subject_id'
});
Subject.hasMany(Grade,{
    foreignKey: 'subject_id'
});

module.exports = Grade;