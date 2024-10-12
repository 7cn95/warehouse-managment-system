import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from '../schemas/items.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  async getAllItems() {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getSingleItem(_id: string) {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getItemsByDate(_date: Date) {
    return 'this.itemModel.find({ date }).exec()';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getItemsByName(_name: string) {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getItemsByOperation(_operation: string) {
    return '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getItemsByStatus(_status: string) {
    return '';
  }

  async getOutcomeQuantity() {
    return 'result[0]?.total || 0';
  }

  async getIncomeQuantity() {
    return 'result[0]?.total || 0';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createOutcomeItem(_createItemDto: CreateItemDto) {
    return '';
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createIncomeItem(createItemDto: CreateItemDto) {
    return '';
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createDamageItem(createItemDto: CreateItemDto) {
    return '';
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createReverseItem(_createItemDto: CreateItemDto) {
    return '';
  }
}
