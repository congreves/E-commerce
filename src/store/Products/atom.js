import { atom } from "recoil";
import { categories, popularProducts } from "../../data";

const productState = atom({
  key: "productState",
  default: { popularProducts, categories: categories , products: [], cart: [],},

});

export default productState