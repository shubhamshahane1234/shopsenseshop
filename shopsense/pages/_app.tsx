import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import { Interface } from "readline";

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart]: any = useState({});
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (
    itemCode: string,
    qty: number,
    price: number,
    name: string,
    size: string,
    variant: string,
    img: any
  ) => {
    let newcart = cart;
    if (itemCode in cart) {
      newcart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newcart[itemCode] = { itemCode, qty: 1, price, name, size, variant, img };
    }
    setCart(newcart);
    saveCart(newcart);
    console.log(cart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  useEffect(() => {
    console.log("Hey I am a useEffect from _app.js");
    try {
      if (localStorage.getItem("cart")) {
        let data: any = localStorage.getItem("cart");
        setCart(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart: any) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let keys = Object.keys(myCart);
    let subt = 0;
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const removeFromCart = (
    itemCode: any,
    qty: any,
    price: any,
    name: any,
    size: any,
    variant: any
  ) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <NavBar />
      {/* <Nav/> */}
      <Component
        {...pageProps}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        addToCart={addToCart}
        cart={cart}
        subTotal={subTotal}
      />
      <Footer />
    </>
  );
}
