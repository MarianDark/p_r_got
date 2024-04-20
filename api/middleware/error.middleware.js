const notFoundHandler = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: error.message,
    // eslint-disable-next-line no-undef
    stack: process.env.NODE_ENV === "production" ? "" : error.stack,
  });
};

export default {
  notFoundHandler,
  errorHandler,
};
