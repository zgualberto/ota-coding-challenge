import { IsNotEmpty, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class ShowValidator {
  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  id: number;
}
