const statisticController = require('../controllers/statisticController');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: statisticController.index
    }
];