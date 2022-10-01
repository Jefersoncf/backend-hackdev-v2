class AppError extends Error {
  constructor({ message, details, statusMessage = 'Error', statusCode }) {
    super(message);
    this.message = message;
    this.details = details;
    this.statusMessage = statusMessage;
    this.statusCode = statusCode;
  }
}
export default AppError;
