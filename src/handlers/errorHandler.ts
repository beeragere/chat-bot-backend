export enum ErrorType {
  userDefined = "userDefined",
  HTTP = "HTTP",
  HttpGet = "GET",
  HttpPost = "POST",
  HttpPut = "PUT",
  DB = "Database",
}

export class ErrorHandler extends Error {
  constructor(name: string, message: string, type: ErrorType) {
    super(`error type: ${type}, ` + message);
    this.name = name;
  }
}
