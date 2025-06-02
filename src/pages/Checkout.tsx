import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <h2>Kassa</h2>
      <span>{cartItems.length}</span>
    </>
  );
};
