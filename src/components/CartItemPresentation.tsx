import type { Dispatch } from "react";
import type { CartItem } from "../models/CartItem";
import { CartActionTypes, type CartAction } from "../reducers/CartReducer";

type CartItemPresentationProps = {
  cartItem: CartItem;
  cartDispatch: Dispatch<CartAction>;
};

export const CartItemPresentation = ({
  cartItem,
  cartDispatch,
}: CartItemPresentationProps) => {
  const { product, amount } = cartItem;

  return (
    <>
      <div key={product.id} className="cart-item-container">
        <div className="cart-image-container">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="cart-item-details">
          <h3>{product.name}</h3>
          <div className="cart-amount-container">
            <button
              onClick={() => {
                cartDispatch({
                  type: CartActionTypes.DECREASED,
                  payload: product.id.toString(),
                });
              }}
            >
              -
            </button>
            <span>{amount}</span>
            <button
              onClick={() => {
                cartDispatch({
                  type: CartActionTypes.INCREASED,
                  payload: product.id.toString(),
                });
              }}
            >
              +
            </button>
            <span>à {product.price} SEK</span>
          </div>
          <span>{product.price * amount} SEK</span>
        </div>
      </div>
    </>
  );
};
