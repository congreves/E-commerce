import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { schoolProducts } from "../data";
import { cartReducer } from "./Reducers";

const Cart = createContext();
const Context = ({ children }) => {
 /* const dispatchRedux = useDispatch();
  const SET_PRODUCTS = "SET_PRODUCTS";

  const SELECTED_PRODUCTS = "SELECTED_PRODUCTS";
  const SELECTED_PRODUCT = "SELECTED_PRODUCT";

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

  useEffect(() => {
    dispatchRedux(fetchProducts());
  }, []);
  */

  const schoolProducts = useSelector((state) => state.allProducts.products);
  const cartProducts = schoolProducts.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    qty: product.qty,
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: cartProducts,
    cart: [],
  });

return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
    )
    
};
export const CartState = () => {
    return useContext(Cart);
}
export default Context;
