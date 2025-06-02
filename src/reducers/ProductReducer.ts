import type { IProduct } from "../models/Product";

export enum ProductActionTypes {
  LOADED,
}
export type ProductAction = {
  type: ProductActionTypes;
  payload: string;
};

export const ProductReducer = (
  products: IProduct[],
  action: ProductAction
): IProduct[] => {
  if (action.type === ProductActionTypes.LOADED) {
    return JSON.parse(action.payload) as IProduct[];
  }
  return products;
};
