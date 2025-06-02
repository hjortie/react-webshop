import type { CartItem } from "../models/CartItem";
import type { IProduct } from "../models/Product";

export enum CartActionTypes {
  ADDED,
  INCREASED,
  DECREASED,
}
export type CartAction = {
  type: CartActionTypes;
  payload: string;
};

export const CartReducer = (
  cartItems: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case CartActionTypes.ADDED:
      const productToAdd = JSON.parse(action.payload) as IProduct;
      const foundProduct = cartItems.find(
        (ci) => ci.product.id === productToAdd.id
      );

      if (!foundProduct) {
        return [...cartItems, { product: productToAdd, amount: 1 }];
      } else {
        return cartItems.map((ci) => {
          if (ci.product.id === productToAdd.id)
            return { ...ci, amount: ci.amount + 1 };
          else return ci;
        });
      }

    case CartActionTypes.DECREASED: {
      const foundProduct = cartItems.find(
        (ci) => ci.product.id === +action.payload
      );
      if (!foundProduct) {
        return cartItems;
      }
      if (foundProduct.amount > 1) {
        return cartItems.map((ci) => {
          if (ci.product.id === +action.payload) {
            return { ...ci, amount: ci.amount - 1 };
          }
          return ci;
        });
      } else return cartItems.filter((ci) => ci.product.id !== +action.payload);
    }
    case CartActionTypes.INCREASED:
      return cartItems.map((ci) => {
        if (ci.product.id === +action.payload)
          return { ...ci, amount: ci.amount + 1 };
        return ci;
      });

    default:
      return cartItems;
  }
};
