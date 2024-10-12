import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Get(':id')
  getSingleItem(@Param('id') id: string) {
    return this.itemsService.getSingleItem(id);
  }

  @Get('by-date')
  getItemsByDate(@Query('date') date: string) {
    return this.itemsService.getItemsByDate(new Date(date));
  }

  @Get('by-name')
  getItemsByName(@Query('name') name: string) {
    return this.itemsService.getItemsByName(name);
  }

  @Get('by-operation')
  getItemsByOperation(@Query('operation') operation: string) {
    return this.itemsService.getItemsByOperation(operation);
  }

  @Get('by-status')
  getItemsByStatus(@Query('status') status: string) {
    return this.itemsService.getItemsByStatus(status);
  }

  @Get('outcome-quantity')
  getOutcomeQuantity() {
    return this.itemsService.getOutcomeQuantity();
  }

  @Get('income-quantity')
  getIncomeQuantity() {
    return this.itemsService.getIncomeQuantity();
  }

  @Post('outcome')
  createOutcomeItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createOutcomeItem(createItemDto);
  }

  @Post('income')
  createIncomeItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createIncomeItem(createItemDto);
  }

  @Post('damage')
  createDamageItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createDamageItem(createItemDto);
  }

  @Post('reverse')
  createReverseItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createReverseItem(createItemDto);
  }
}
