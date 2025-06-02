import type { IProduct } from "./Product";

export type CartItem = {
  product: IProduct;
  amount: number;
};
