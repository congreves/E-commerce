import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/SingleProduct";
import Cart from "./pages/Cart/Cart";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { productState } from "./store/Products/atom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getDataFromLocalStorage } from "./utility/localStorage";
import axios from "axios";
import cartState from "./store/Cart/atom";

function App() {
  const setProducts = useRecoilState(productState)[1];
  const setCart = useRecoilState(cartState)[1];

  useEffect(() => {
    axios.get("https://k4backend.osuka.dev/products").then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);

  useEffect(() => {
    const cartData = getDataFromLocalStorage("cart");
    setCart(cartData);
  }, [setCart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* */
