const databaseController = require('../controllers/databaseController');

module.exports = [
    {
        method: "GET",
        path: "/database/seed",
        handler: databaseController.seed
    },
    {
        method: "GET",
        path: "/database/unseed",
        handler: databaseController.unseed
    },
];