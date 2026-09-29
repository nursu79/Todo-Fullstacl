const path = require('path');
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
  apis: [path.join(__dirname, '../routes/todoRoute.js')],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
