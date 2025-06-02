import { createContext, type Dispatch } from "react";
import type { CartItem } from "../models/CartItem";
import type { CartAction } from "../reducers/CartReducer";

interface ICartItemContext {
  cartItems: CartItem[];
  cartDispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<ICartItemContext>({
  cartItems: [],
  cartDispatch: () => {},
});
