import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
import { Body, Controller, Delete, Get, Param, Patch, Post, HttpCode } from '@nestjs/common';

@Controller('product')
export class ProductController {

  @Post('create')
  async create(@Body() data: Omit<ProductModel, 'id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: number) {

  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: ProductModel) {

  }


  @HttpCode(200)
  @Post()
  async find(@Body() data: FindProductDto) {

  }
}
