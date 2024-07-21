import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant, Review } from './restaurant.schema';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get('search')
  async search(@Query('keyword') keyword: string = '') {
    return this.restaurantService.search(keyword);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.restaurantService.findById(id);
  }

  @Post(':id/review')
  async addReview(@Param('id') restaurantId: string, @Body() review: Review) {
    return this.restaurantService.addReview(restaurantId, review);
  }
}
