export default class ServerError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = "ServerValidationError";
    this.status = status;
    this.response = response;
  }

  getStatus() {
    return this.status;
  }

  getResponse() {
    return this.response;
  }

  getErrorMessage() {
    if (this.response && this.response.error) {
      const { message } = this.response.error;
      const res = message.fails ? message.fails : message.message;
      return res;
    }
    return this.message;
  }
}
