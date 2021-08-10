import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RepairsService } from './repairs.service';

@Controller('repairs')
export class RepairsController {
    constructor(private repairsService: RepairsService){}

    @Get()
    async repairsList() {
        return this.repairsList.findAll();
    }

    @Post()
    async create(@Body() createRepairs: CreateRepairsDto) {
        this.repairsService.create(createRepairs);
    }

    @Put("/:id")
    async modify(@Body() modifyRepairs: ModifyRepairsDto, @Param('id') id: string) {
        this.repairsService.modify(id, modifyRepairs);
    }

    @Delete("/:id")
    async delete(@Param('id') id: string) {
        this.repairsService.delete(id);
    }
}
