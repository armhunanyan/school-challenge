const Grade = require('../models/grade');

exports.index = async (request, h) => {

    return await Grade.findAll();

}

exports.show = async (request, h) => {

    return await Grade.findOne({
        where: {
            id: request.params.id
        }
    });

}

exports.store = async (request, h) => {

    await Grade.create({
        grade: request.payload.grade,
        teacher_id: request.payload.teacher_id,
        student_id: request.payload.student_id,
        subject_id: request.payload.subject_id,
    });

    return "Grade stored successfully!";

}

exports.update = async (request, h) => {

    await Grade.update({
        grade: request.payload.grade,
        teacher_id: request.payload.teacher_id,
        student_id: request.payload.student_id,
        subject_id: request.payload.subject_id,
    }, {
        where: {
            id: request.params.id
        }
    });

    return "Grade updated successfully!";

}

exports.destroy = async (request, h) => {

    Grade.destroy({
        where: {
            id: request.params.id
        }
    });

    return "Grade deleted successfully!";

}