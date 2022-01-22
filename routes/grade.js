const gradeController = require('../controllers/gradeController');

const Joi = require('joi');

module.exports = [
    {
        method: "GET",
        path: "/grades",
        handler: gradeController.index
    },
    {
        method: "POST",
        path: "/grades/store",
        handler: gradeController.store,
        options: {
            validate: {
                payload: Joi.object({
                    grade: Joi.number().integer().min(1).max(5).required(),
                    teacher_id: Joi.number().integer().required(),
                    student_id: Joi.number().integer().required(),
                    subject_id: Joi.number().integer().required(),
                }),
                failAction: (request, h, err) => {

                    throw err;
                }
            }
        }
    },
    {
        method: "GET",
        path: "/grades/{id}",
        handler: gradeController.show
    },
    {
        method: "PUT",
        path: "/grades/{id}",
        handler: gradeController.update,
        options: {
            validate: {
                payload: Joi.object({
                    grade: Joi.number().integer().min(1).max(5),
                    teacher_id: Joi.number().integer(),
                    student_id: Joi.number().integer(),
                    subject_id: Joi.number().integer(),
                }),
                failAction: (request, h, err) => {

                    throw err;
                }
            }
        }
    },
    {
        method: "DELETE",
        path: "/grades/{id}",
        handler: gradeController.destroy
    }
];