const Student = require('../models/student');

const Subject = require('../models/subject');

const Grade = require('../models/grade');

const Clazz = require('../models/class');

const sortStudentsByAvgGrade = async (request, h) => {

    const data = [];

    const students = await Student.findAll({
        include: Grade,
    });

    students.map((element, index) => {

        let student = {
            id: element.id,
            name: element.name,
            average_grade: 0
        };

        let grades = [];

        let grades_obj = element.Grades;

        for (let i = 0; i < grades_obj.length; i++) {

            grades.push(grades_obj[i].grade);

        }

        let sum = grades.reduce((a, b) => a + b, 0);

        let avg = (sum / grades.length) || 0;

        student.average_grade = avg;

        data.push(student);

    })

    data.sort(function (a, b) {
        return a.average_grade - b.average_grade
    });

    return data;

}

const sortSubjectsByAvgGrade = async (request, h) => {

    const data = [];

    const subjects = await Subject.findAll({
        include: Grade,
    });

    subjects.map((element, index) => {

        let subject = {
            name: element.name,
            average_grade: 0
        };

        let grades = [];

        let grades_obj = element.Grades;

        for (let i = 0; i < grades_obj.length; i++) {

            grades.push(grades_obj[i].grade);

        }

        let sum = grades.reduce((a, b) => a + b, 0);

        let avg = (sum / grades.length) || 0;

        subject.average_grade = avg;

        data.push(subject);

    })

    data.sort(function (a, b) {
        return b.average_grade - a.average_grade
    });

    return data;

}

const sortClassesByAvgGrade = async (request, h) => {

    const data = [];

    const classes = await Clazz.findAll({
        include: Student,
    });

    const averageGradesOfUsers = await sortStudentsByAvgGrade();

    classes.map((element, index) => {

        let clazz = {
            name: element.name,
            average_grade: []
        };

        const students_of_this_class = element.Students;

        for (let i = 0; i < students_of_this_class.length; i++) {

            const user_grade = averageGradesOfUsers.find(item => {
                return item.id === students_of_this_class[i].id;
            })

            clazz.average_grade.push(user_grade.average_grade);
        }

        let sum = clazz.average_grade.reduce((a, b) => a + b, 0);

        let avg = (sum / clazz.average_grade.length) || 0;

        clazz.average_grade = avg;

        data.push(clazz);

    })

    data.sort(function (a, b) {
        return b.average_grade - a.average_grade
    });

    return data;

}

exports.index = async (request, h) => {

    const studentsData = await sortStudentsByAvgGrade();

    const subjectsData = await sortSubjectsByAvgGrade();

    const classesData = await sortClassesByAvgGrade();

    return h.view('statistics', {
        studentsData,
        subjectsData,
        classesData
    });
}