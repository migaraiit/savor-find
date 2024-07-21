import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, Review } from './restaurant.schema';

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

  async findById(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id).exec();
    return restaurant;
  }

  async addReview(restaurantId: string, review: Review): Promise<Restaurant> {
    return this.restaurantModel
      .findByIdAndUpdate(
        restaurantId,
        { $push: { reviews: review } },
        { new: true },
      )
      .exec();
  }
}
