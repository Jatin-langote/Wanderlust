class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    // console.log(statusCode, message)
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ExpressError;
