const Teacher = require('../models/teacher');
const Clazz = require('../models/class');
const Subject = require('../models/subject');

exports.seed = async (request, h) => {

    /*Create Teachers*/
    const teacher1 = await Teacher.create({
        name: "Sammy Fernandez"
    });
    const teacher2 = await Teacher.create({
        name: "Rafael Mathis"
    });
    const teacher3 = await Teacher.create({
        name: "Francisco Wickens"
    });
    const teacher4 = await Teacher.create({
        name: "Ariana Decker"
    });

    /*Create Classes*/
    const class1 = await Clazz.create({
        name: "1.A",
        teacher_id: teacher1.id
    });
    const class2 = await Clazz.create({
        name: "2.A",
        teacher_id: teacher2.id
    });

    /*Create Subjects*/

    const subject1 = await Subject.create({
        name: "Math",
        teacher_id: teacher1.id
    });
    const subject2 = await Subject.create({
        name: "Geography",
        teacher_id: teacher2.id
    });
    const subject3 = await Subject.create({
        name: "History",
        teacher_id: teacher3.id
    });
    const subject4 = await Subject.create({
        name: "Physics",
        teacher_id: teacher4.id
    });

    return "Database seeded successfully!";

}

exports.unseed = async (request, h) => {

}