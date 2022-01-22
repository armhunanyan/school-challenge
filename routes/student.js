const studentController = require('../controllers/studentController');

const Joi = require('joi');

module.exports = [
    {
        method: "GET",
        path: "/students",
        handler: studentController.index
    },
    {
        method: "POST",
        path: "/students/store",
        handler: studentController.store,
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().required(),
                    class_id: Joi.number().integer().required(),
                    subjects: Joi.array().min(1).required(),
                }),
                failAction: (request, h, err) => {

                    throw err;
                }
            }
        }
    },
    {
        method: "GET",
        path: "/students/{id}",
        handler: studentController.show
    },
    {
        method: "PUT",
        path: "/students/{id}",
        handler: studentController.update,
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string(),
                    class_id: Joi.number().integer(),
                    subjects: Joi.array().min(1),
                }),
                failAction: (request, h, err) => {

                    throw err;
                }
            }
        }
    },
    {
        method: "DELETE",
        path: "/students/{id}",
        handler: studentController.destroy
    }
];