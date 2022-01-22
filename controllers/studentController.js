const Student = require('../models/student');

exports.index = async (request, h) => {

    return await Student.findAll();

}

exports.show = async (request, h) => {

    return await Student.findOne({
        where: {
            id: request.params.id
        }
    });

}

exports.store = async (request, h) => {

    const student = await Student.create({
        name: request.payload.name,
        class_id: request.payload.class_id,
    });

    if (request.payload.subjects.constructor === Array) {

        for (let i = 0; i < request.payload.subjects.length; i++) {

            await student.addSubject(request.payload.subjects[i], {
                save: false
            });

        }
    }

    return "Student stored successfully!";

}

exports.update = async (request, h) => {

    const Student = await Student.update({
        name: request.payload.name,
        class_id: request.payload.class_id,
    }, {
        where: {
            id: request.params.id
        }
    });

    return "Student updated successfully!";

}

exports.destroy = async (request, h) => {

    Student.destroy({
        where: {
            id: request.params.id
        }
    });

    return "Student deleted successfully!";

}