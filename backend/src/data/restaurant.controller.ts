import { Controller, Get, Param, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.schema';

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
}
