import React from "react";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Link to="/productlist">
        <Categories />
      </Link>
      <Link to="/productlist">
        <Products />
      </Link>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
