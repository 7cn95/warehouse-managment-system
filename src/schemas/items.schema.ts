import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop({ required: true, unique: true })
  itemId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, min: 0 })
  quantity: number;

  @Prop({ default: Date.now })
  date: Date;

  @Prop()
  expiryDate: Date;

  @Prop({ required: true, enum: ['وارد', 'صادر'] })
  operationType: string;

  @Prop({ default: 'موجود', enum: ['موجود', 'تالف', 'راجع'] })
  status: string;

  @Prop({ required: true })
  receiver: string;

  @Prop()
  invoiceNumber: string;

  @Prop()
  notes: string;

  @Prop({ required: true })
  createdBy: string;
}

// استخدم SchemaFactory لإنشاء السكيما
export const ItemSchema = SchemaFactory.createForClass(Item);
