import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { House, HouseSchema } from 'src/models/house.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: House.name, schema: HouseSchema, collection: 'detabases' },
    ]),
  ],
  providers: [HouseService],
  controllers: [HouseController],
})
export class HouseModule {}
