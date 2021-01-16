const path = require('path');
const express = require('express');
const morgan = require('morgan');
// security best practice
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');
const cors = require('cors');

// Globale Error Handler
const globalErrorHandler = require('./middleware/error-handler');
// Error Response Class
const ErrorResponse = require('./utilities/error-response');
// Start express app
const app = express();

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());
// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(cors({
//   origin: 'https://www.natours.com'
// }))

app.options('*', cors());
// app.options('/api/v1/tours/:id', cors());

// 1) GLOBAL MIDDLEWARES
// use the following code to serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static(path.join(__dirname, 'public')));
// Serving static files uploads
app.use(express.static(path.join(__dirname, 'uploads')));
// Serving Uploads file
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// Set security HTTP headers
app.use(helmet());
// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Prevent parameter pollution
app.use(hpp()); // <- THIS IS THE NEW LINE
app.use(compression()); // Compress all routes
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Test middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.all('*', (req, res, next) => {
  next(new ErrorResponse(`Can't find ${req.originalUrl} on this server!`, 404));
});
// Error Handling Middlewar, error handler, send stacktrace only during development
app.use(globalErrorHandler);

module.exports = app;
