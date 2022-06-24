const errorHandler = async function (error, req, res, next) {
  return res.status(error.status).json({
    status: error.code,
    message: error.message,
  });
};

module.exports = errorHandler;
