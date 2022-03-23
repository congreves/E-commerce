import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { schoolProducts } from "../data";

const Cart = createContext();
const Context = ({ children }) => {
  const dispatch = useDispatch();
  const SET_PRODUCTS = "SET_PRODUCTS";
  const setProducts = (products) => {
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  };
  const fetchProducts = () => async (dispatch) => {
    const response = await schoolProducts.get("/productlist");
    dispatch({
      type: SELECTED_PRODUCTS,
      payload: response.data,
    });
  };
  const fetchProduct = (id) => async (dispatch) => {
    const response = await schoolProducts.get(`/product/${id}`);
    dispatch({
      type: SELECTED_PRODUCT,
      payload: response.data,
    });
  };
  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    qty: product.qty,
  }));
};
