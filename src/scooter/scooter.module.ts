import { Module } from '@nestjs/common';
import { ScooterService } from './scooter.service';
import { ScooterController } from './scooter.controller';

@Module({
  providers: [ScooterService]
})
export class ScooterModule {}
