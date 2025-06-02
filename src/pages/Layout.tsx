import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./../styles/Layout.css";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { useEffect, useReducer, useState } from "react";
import { ProductActionTypes, ProductReducer } from "../reducers/ProductReducer";
import { CartReducer } from "../reducers/CartReducer";
import axios from "axios";
import type { IProduct } from "../models/Product";

export const Layout = () => {
  const [error, setError] = useState("");
  const [hasFetched, setHasFetched] = useState(false);

  //Här ska vi använda reducer för produkter
  const [products, productDispatch] = useReducer(ProductReducer, []);
  //... och här en reducer för cart
  const [cartItems, cartDispatch] = useReducer(CartReducer, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get<IProduct[]>(
          "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
        );
        if (response.status !== 200) {
          setError("Kunde inte ladda produkter");
        }
        productDispatch({
          type: ProductActionTypes.LOADED,
          payload: JSON.stringify(response.data),
        });
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setHasFetched(true);
      }
    };

    if (!hasFetched) getProducts();
  });

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <div className="wrapper">
        <ProductContext.Provider
          value={{ products, productDispatch: productDispatch }}
        >
          <CartContext.Provider
            value={{ cartItems, cartDispatch: cartDispatch }}
          >
            <Header />

            <main>
              <Outlet />
            </main>
            <Footer />
          </CartContext.Provider>
        </ProductContext.Provider>
      </div>
    </>
  );
};
