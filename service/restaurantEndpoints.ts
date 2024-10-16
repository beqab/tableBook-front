export const restaurantEndpoints = {
  getByParams: `/restaurant/profile/getBy`,
};

export type Types = { value: number; label: string };

export interface IRestaurant {
  restaurantName: string;
  description: string;
  spaceTypes: number[];
  type: Types[];
  kitchens: Types[];
  address: string;
  images: string[];
  previewImages: string[];
  phone: string;
  slag: string;
  email?: string;
  lat: number;
  lng: number;
  restaurantId: string;
  _id: string;
}
