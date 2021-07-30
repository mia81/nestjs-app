import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() data: Omit<TopPageModel, 'id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: number) {

  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: TopPageModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() data: FindTopPageDto) {

  }
}
