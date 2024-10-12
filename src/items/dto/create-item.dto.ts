import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  itemId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  quantity: number;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  date?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  expiryDate?: Date;

  @IsString()
  @IsNotEmpty()
  operationType: 'وارد' | 'صادر';

  @IsString()
  @IsOptional()
  status: 'موجود' | 'تالف' | 'راجع';

  @IsString()
  @IsNotEmpty()
  receiver: string;

  @IsString()
  @IsOptional()
  invoiceNumber?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
