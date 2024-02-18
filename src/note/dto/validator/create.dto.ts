import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateValidator {
  @IsNotEmpty()
  @Type(() => String)
  noteTitle: string;

  @IsNotEmpty()
  @Type(() => String)
  noteBody: string;
}
