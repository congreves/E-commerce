import { atom } from "recoil";


export const productState = atom({
  key: "productState",
  default: [],
  cart: [],
  products: [],
});

export default productState;
