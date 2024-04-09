import { HttpException } from '@nestjs/common';

export class BusinessException extends HttpException {
  constructor(message: string, errorCode?: string, statusCode: number = 400) {
    super({ message, errorCode }, statusCode);
  }
}