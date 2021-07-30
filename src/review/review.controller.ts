import { ReviewModel } from './review.model';
import { Body, Controller, Delete, Post, Param, Get } from '@nestjs/common';

@Controller('review')
export class ReviewController {

  @Post('create')
  async create(@Body() data: Omit<ReviewModel, 'id'>) {

  }

  @Delete(':id')
  async delete(@Param() id: string) {

  }

  @Get('byProduct/:productId')
  async getByProduct(@Param() productId: string) {

  }
}
