"use strict";

const Hapi = require("@hapi/hapi");

require('dotenv').config();

const routes = require('./routes');

const init = async () => {

    const server = Hapi.server({
        host: "localhost",
        port: "3000"
    });

    await server.register(require('@hapi/vision'));

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route(routes);

    await server.start();
    
    console.log(`Server running on ${server.info.uri}`);

}

process.on('unhandledRejection', (error) => {

    console.log(error);

    process.exit(1);

})

init();