const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'A REST API for managing todos',
    },
  },
  apis: ['./routes/todoRoute.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
