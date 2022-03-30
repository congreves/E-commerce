import axios from "axios";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import productState from "./store/products/atom";

function App() {
  const [_, setProducts] = useRecoilState(productState);

  useEffect(() => {
    axios.get("https://k4backend.osuka.dev/products").then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
