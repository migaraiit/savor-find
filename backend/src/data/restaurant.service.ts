import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async search(keyword: string): Promise<Restaurant[]> {
    return this.restaurantModel
      .find({
        $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { location: { $regex: keyword, $options: 'i' } },
          { cuisineType: { $regex: keyword, $options: 'i' } },
        ],
      })
      .exec();
  }
}
