import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import { Interface } from "readline";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart]: any = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setuser]: any = useState({ value: null });
  const [key, setkey]: any = useState(null);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

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

  const logout = () => {
    localStorage.removeItem("token");
    // setkey(Math.random());
    setuser({ value: null });
  };
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    try {
      if (localStorage.getItem("cart")) {
        let data: any = localStorage.getItem("cart");
        setCart(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }

    const token = localStorage.getItem("token");
    console.log(token, "token app");
    if (token) {
      setuser({ value: token });
      setkey(Math.random());
    }
  }, [router.query, router.events]);

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
      <LoadingBar
        color="#4f46e5"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavBar key={key} user={user} logout={logout} />
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
