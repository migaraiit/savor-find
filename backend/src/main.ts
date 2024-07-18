import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
mongoose.set('debug', true);
bootstrap();
