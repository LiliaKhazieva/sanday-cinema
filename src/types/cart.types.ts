import { IMovie } from "./movie.types";

export interface ICart {
  id: string;
  createdAt: string;
  updateAd: string;

  items: ICartItem[];
}

export interface ICartItem extends ISimpleCartItem {
  createdAt: string;
  updatedAt: string;
}

export interface ISimpleCartItem {
  id: string;
  product: IMovie;
  quantity: number;
  asSecondItem?: boolean;
}
