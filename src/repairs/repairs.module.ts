import { Module } from '@nestjs/common';
import { RepairsService } from './repairs.service';
import { RepairsController } from './repairs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repairs } from 'src/Entities/Repairs';

@Module({
  providers: [RepairsService],
  imports: [TypeOrmModule.forFeature([Repairs])],
  controllers: [RepairsController]
})
export class RepairsModule {}
