import { Injectable } from '@nestjs/common';
import { Repairs } from 'src/Entities/Repairs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RepairsService {
    constructor(
        @InjectRepository(Repairs)
        private repairsRepository: Repository<Repairs>,
    ) {}

    findAll() {
        return this.repairsRepository.find();
      }


}
