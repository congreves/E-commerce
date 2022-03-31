import { atom, useRecoilState } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export default cartState;

export function CreateCartAPI() {
  const [cart, setCart] = useRecoilState(cartState);

  function addToCart(id, qty = 1) {
    const product = cart.find((p) => p.id === id);

    if (product) {
      const newState = cart.map((product) => {
        if (product.id === id) {
          return {
            id: id,
            qty: product.qty + 1,
          }
        }
        return product;
      })
      setCart(newState);
      return;
    }
    setCart([...cart, { id, qty }])
  }

  function reduceQty(id) {
    const newState = cart.map((product) => {
      if (product.id === id) {
        return { id, qty: product.qty > 1 ? product.qty - 1 : product.qty };
      }
      return product;
    })
    setCart(newState);
  }

  function increaseQty(id) {
    const newState = cart.map((product) => {
      if (product.id === id) {
        return { id, qty: product.qty + 1 }
      }
      return product;
    })
    setCart(newState);
  }

  function removeFromCart(id) {
    const newCartState = cart.filter((p) => p.id !== id);
    setCart(newCartState);
  }

  return {
    cart,
    addToCart,
    reduceQty,
    increaseQty,
    removeFromCart,
  };
}
