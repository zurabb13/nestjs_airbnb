import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type HouseDocument = House & Document;

@Schema()
export class House {
  // @Prop({
  // type: mongoose.Schema.Types.ObjectId,
  // })
  _id: string;

  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  city: string;

  @Prop({ type: Number })
  rating: number;

  @Prop({ type: Number })
  lat: number;

  @Prop({ type: Number })
  lon: number;

  @Prop({ type: String })
  image: string;

  @Prop({ tyoe: [String] })
  images: string[];

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  summary: string;

  @Prop({ type: [String] })
  feature: string[];

  @Prop({ type: String })
  street: string;

  @Prop({ type: String })
  room_type: string;

  @Prop({ type: Number })
  bathrooms: number;

  @Prop({ type: String })
  bedrooms: string;

  @Prop({ type: Number })
  price: number;
}

export const HouseSchema = SchemaFactory.createForClass(House);
