import { Injectable } from '@nestjs/common';
import { Scooter } from 'src/Entities/Scooter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ScooterService {
    constructor(
        @InjectRepository(Scooter)
        private scooterRepository: Repository<Scooter>,
    ) {}

    findAll() {
        return this.scooterRepository.find();
    }

    find() {
        return this.scooterRepository.find();
    }

    create() {
        return this.scooterRepository.create();
    }

    modify() {
        return this.scooterRepository.modify();
    }

    delete() {
        return this.scooterRepository.delete();
    }
}
