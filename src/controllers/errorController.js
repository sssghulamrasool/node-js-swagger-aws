const AppError = require("../utils/app-error");

const CastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const sendErrorOnProduction = (err, req, res) => {
  return res.status(err.statusCode).json({
    success: false,
    error: {
      statusCode: err.statusCode,
      message: err.message,
    },
  });
};
const sendErrorOnDevelopment = (err, req, res) => {
  return res.status(err.statusCode).json({
    success: false,
    error: {
      statusCode: err.statusCode,
      message: err.message,
      stack: err.stack,
    },
  });
};
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = err;
  error.message = err.message;
  if (err.name === "CastError") error = CastError(err);

  if (process.env.NODE_ENV === "development") {
    sendErrorOnDevelopment(error, req, res);
  } else if (process.env.NODE_ENV === "production") {
    sendErrorOnProduction(error, req, res);
  }
};
