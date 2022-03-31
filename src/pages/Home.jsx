import React from "react";
import Categories from "../components/Categories/Categories";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
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
