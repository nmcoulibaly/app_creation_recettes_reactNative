const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Dish Recipe',
            version: '1.0.0',
            description: "Documentation de l'API de LSA Location",
        },
        servers: [
            {
                url: 'http://localhost:9000',
                description: 'Serveur local',
            },
        ],
    },
    apis: ['./routes/*.js'],
};


module.exports = swaggerJsdoc(options);
