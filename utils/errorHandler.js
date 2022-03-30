//KREIRAME CLASA to handle na errorite.


class ErrorHandler extends Error {
   constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;


      Error.captureStackTrace(this, this.constructor) //This gave us node stack and location where the error occurred
   }

}

export default ErrorHandler;