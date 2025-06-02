import { useContext } from "react";
import "./../styles/Cart.css";
import { CartItemPresentation } from "../components/CartItemPresentation";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";

export const Cart = () => {
  const { cartItems, cartDispatch } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, ci) => sum + ci.amount * ci.product.price,
    0
  );

  return (
    <>
      <div className="cart-container">
        <h2>Din varukorg</h2>
        {cartItems.map((ci) => (
          <CartItemPresentation
            key={ci.product.id}
            cartItem={ci}
            cartDispatch={cartDispatch}
          />
        ))}
        <div className="total-container">
          <p className="total">Total: {total} SEK</p>
          <Link to="/checkout" className="checkout-btn">
            Gå till kassa
          </Link>
        </div>
      </div>
    </>
  );
};
