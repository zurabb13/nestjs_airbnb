import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHouseDTO, UpdateHouseDTO } from 'src/dto/house.dto';
import { House, HouseDocument } from 'src/models/house.model';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>,
  ) {}

  async getHouse(): Promise<House[]> {
    return await this.houseModel.find().exec();
  }

  async getHouseById(id: string) {
    return await this.houseModel.findById(id);
  }

  async create(item: CreateHouseDTO): Promise<House> {
    const house = await this.houseModel.create(item);
    return house;
  }

  async update(id: string, body: UpdateHouseDTO): Promise<House> {
    return await this.houseModel.findByIdAndUpdate(id, body);
  }

  async delete(id: string) {
    return await this.houseModel.findByIdAndDelete(id);
  }
}
