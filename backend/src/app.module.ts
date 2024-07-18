import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './data/restaurant.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://migara:yalABOQKFitytbCx@cluster0.hmivtvp.mongodb.net/savorfind?retryWrites=true&w=majority',
      {},
    ),
    RestaurantModule,
  ],
})
export class AppModule {}
