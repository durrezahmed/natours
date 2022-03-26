const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES

// morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// middleware to get access to the req.body
app.use(express.json());

// middleware to serve static files
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// mounting the routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// middleware for all bad requests
// this middleware will run after the whole code has been executed
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// error hadling middleware
app.use(globalErrorHandler);

module.exports = app;
