const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorsController');
const todoRouter = require('./routes/todoRoute');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css';
const JS_URL = [
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
];

app.use('/api/v1/todos', todoRouter);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL, customJs: JS_URL })
);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
