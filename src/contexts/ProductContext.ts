import { createContext, type Dispatch } from "react";
import type { IProduct } from "../models/Product";
import type { ProductAction } from "../reducers/ProductReducer";

interface IProductContext {
  products: IProduct[];
  productDispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  productDispatch: () => {},
});
