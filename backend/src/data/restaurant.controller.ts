import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.schema';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findOne(id);
  }
}
