import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type HouseDocument = House & Document;

@Schema()
export class House {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
  })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  rating: number;

  @Prop()
  lat: number;

  @Prop()
  lon: number;

  @Prop()
  image: string;

  @Prop()
  images: string[];

  @Prop()
  description: string;

  @Prop()
  summary: string;

  @Prop()
  feature: string[];

  @Prop()
  street: string;

  @Prop()
  room_type: string;

  @Prop()
  bathrooms: number;

  @Prop()
  bedrooms: string;

  @Prop()
  price: number;
}

export const HouseSchema = SchemaFactory.createForClass(House);
