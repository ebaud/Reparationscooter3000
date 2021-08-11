import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ScooterService } from './scooter.service';

@Controller('scooter')
export class ScooterController {
    constructor(private scooterService: ScooterService){}

    @Get()
    async scooterList() {
        return this.scooterList.findAll();
    }

    @Get("/:id")
    async scooterRepairs(@Param('id') id: string){
        return this.scooterRepairs.find(id);
    }

    @Post()
    async create(@Body() createScooter: CreateScooterDto) {
        this.scooterService.create(createScooter);
    }

    @Put("/:id")
    async modify(@Body() modifyScooter: ModifyScooterDto, @Param('id') id: string) {
        this.scooterService.modify(id, modifyScooter);
    }

    @Delete("/:id")
    async delete(@Param('id') id: string) {
        this.scooterService.delete(id);
    }
}
