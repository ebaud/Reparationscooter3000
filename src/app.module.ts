import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScooterController } from './scooter/scooter.controller';
import { ScooterModule } from './scooter/scooter.module';
import { RepairsController } from './repairs/repairs.controller';
import { RepairsModule } from './repairs/repairs.module';
import { Scooter } from './Entities/Scooter';
import { Repairs } from './Entities/Repairs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'test',
      entities: [Scooter, Repairs],
      synchronize: true,
    }),
    ScooterModule,
    RepairsModule,
  ],
  controllers: [AppController, ScooterController, RepairsController],
  providers: [AppService],
})
export class AppModule {}
