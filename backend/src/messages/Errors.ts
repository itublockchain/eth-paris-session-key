import { HttpException, HttpStatus } from '@nestjs/common';

export function BadRequest(message = 'Bad Request!'): void {
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
}
