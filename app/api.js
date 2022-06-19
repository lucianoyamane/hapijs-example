const { join } = require('path');
const { config } = require('dotenv');
const { methods:methodsBeer } = require('./route/beer.route');
const Hapi = require('@hapi/hapi');

const init = async () => {

    const env = process.env.NODE_ENV || "dev";
    const configPath = join('./config', `.env.${env}`);

    config({
        path: configPath
    })

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    server.route([
        ...methodsBeer
    ]);

    server.events.on('start', () => {

        console.log('Server running on %s', server.info);
    });

    await server.start();
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();