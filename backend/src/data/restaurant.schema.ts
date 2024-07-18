import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema({ collection: 'restaurant' })
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  cuisineType: string;

  @Prop()
  priceRange: string;

  @Prop()
  rating: number;

  @Prop([
    {
      user: { type: String },
      comment: { type: String },
      rating: { type: Number },
    },
  ])
  reviews: Array<{ user: string; comment: string; rating: number }>;

  @Prop({ type: Map, of: String })
  hours: Record<string, string>;

  @Prop()
  phoneNumber: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
