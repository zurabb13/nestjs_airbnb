export class CreateHouseDTO {
  readonly name: string;
  city: string;
  rating: number;
  lat: number;
  lon: number;
  image: string;
  images: string[];
  description: string;
  summary: string;
  feature: string[];
  street: string;
  room_type: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
}

export class UpdateHouseDTO {
  name: string;
  city: string;
  rating: number;
  lat: number;
  lon: number;
  image: string;
  images: string[];
  description: string;
  summary: string;
  feature: string[];
  street: string;
  room_type: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
}
