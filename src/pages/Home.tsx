import { useContext } from "react";
import type { IProduct } from "../models/Product";

import "./../styles/Home.css";
import { CartActionTypes } from "../reducers/CartReducer";
import { ProductPresentation } from "../components/ProductPresentation";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

export const Home = () => {
  const { products } = useContext(ProductContext);
  const { cartDispatch } = useContext(CartContext);

  const addToCart = (productToAdd: IProduct) => {
    cartDispatch({
      type: CartActionTypes.ADDED,
      payload: JSON.stringify(productToAdd),
    });
  };

  return (
    <>
      <div className="products-container">
        {products.map((p) => (
          <div key={p.id} className="product-container">
            <ProductPresentation product={p} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </>
  );
};
