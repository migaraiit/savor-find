import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema({ collection: 'restaurant' })
export class Review {
  @Prop()
  user: string;

  @Prop()
  comment: string;

  @Prop()
  rating: number;
}
const ReviewSchema = SchemaFactory.createForClass(Review);

@Schema({ collection: 'restaurant' })
export class Restaurant extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  location: string;

  @Prop()
  cuisineType: string;

  @Prop()
  priceRange: string;

  @Prop()
  rating: number;

  @Prop([ReviewSchema])
  reviews: Review[];

  @Prop({ type: Map, of: String })
  hours: Record<string, string>;

  @Prop()
  phoneNumber: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
