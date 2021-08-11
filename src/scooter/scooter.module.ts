import { Module } from '@nestjs/common';
import { ScooterService } from './scooter.service';
import { ScooterController } from './scooter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from 'src/Entities/Scooter';

@Module({
  providers: [ScooterService],
  imports: [TypeOrmModule.forFeature([Scooter])],
  controllers: [ScooterController]
})
export class ScooterModule {}
