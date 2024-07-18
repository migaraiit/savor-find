import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async findOne(id: string): Promise<Restaurant> {
    try {
      const restaurant = await this.restaurantModel.findById(id).exec();
      if (!restaurant) {
        throw new Error(`Restaurant with id ${id} not found`);
      }
      console.log('Retrieved restaurant:', restaurant);
      return restaurant;
    } catch (error) {
      console.error('Error retrieving restaurant:', error.message);
      throw error; // Re-throw the error to propagate it up the call stack
    }
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }
}
