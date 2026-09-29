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

app.use('/api/v1/todos', todoRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
