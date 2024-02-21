import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { House } from 'src/models/house.model';
import { HouseService } from './house.service';
import { CreateHouseDTO, UpdateHouseDTO } from 'src/dto/house.dto';

@Controller('house')
export class HouseController {
  constructor(private service: HouseService) {}

  @Get()
  async getHouse(): Promise<House[]> {
    return await this.service.getHouse();
  }

  @Get('/:id')
  async getHouseByID(@Param('id') id: string) {
    return await this.service.getHouseById(id);
  }

  @Post()
  async create(@Body() body: CreateHouseDTO) {
    return await this.service.create(body);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateHouseDTO,
  ): Promise<House> {
    return await this.service.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
