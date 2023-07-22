import { applyDecorators } from '@nestjs/common';
import { ValidateIf as DefaultValidateIf } from 'class-validator';

export const ValidateIfNotEmpty = (): Function => {
    return applyDecorators(DefaultValidateIf((_, value) => value !== null));
};
