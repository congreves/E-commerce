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
      const oldCartState = cart.filter((p) => p.id !== id)
      setCart([
        ...oldCartState,
        {
          id: id,
          qty: qty + 1,
        }
      ])
      return;
    }

    setCart([...cart, { id, qty }])
  }

  function reduceQty(id) {
    const product = cart.find((p) => p.id === id);
    const oldState = cart.filter((p) => p.id !== id)
    const newCartState = [...oldState, { id, qty: product.qty > 1 ? product.qty - 1 : product.qty }];
    setCart(newCartState)
  }

  function increaseQty(id) {
    const product = cart.find((p) => p.id === id);
    const oldState = cart.filter((p) => p.id !== id)
    const newCartState = [...oldState, { id, qty: product.qty + 1 }];
    setCart(newCartState)
  }

  function removeFromCart(id) {
    const newCartState = cart.filter((product) => product.id !== id);
    setCart(newCartState);
  }

  return {
    cart,
    addToCart,
    reduceQty,
    increaseQty,
    removeFromCart,
  }
}




/**
 * 1. Spara en produkt i din varukorg
 *    - Lägga till flera av samma produkt i varukorgen
 * 
 * 3. Minska antalet produkter
 *    - Ta bort en produkt helt från din varukorg
 */

const cart = [
  {
    id: 7, // false
    qty: 1
  },
  {
    id: 1, // false
    qty: 1
  },
  {
    id: 4, // false
    qty: 1
  },
  {
    id: 3, // false
    qty: 1
  },
  {
    id: 5, // false
    qty: 1
  },
];


const products = [
  {
    id: 1,
    name: "Jacka",
    price: 100,
    image: "asdlawdöljkasd",
    description: "Detta är en jacka"
  },
  {
    id: 2,
    name: "Jacka",
    price: 100,
    image: "asdlawdöljkasd",
    description: "Detta är en jacka"
  },
  {
    id: 3,
    name: "Jacka",
    price: 100,
    image: "asdlawdöljkasd",
    description: "Detta är en jacka"
  },
  {
    id: 4,
    name: "Jacka",
    price: 100,
    image: "asdlawdöljkasd",
    description: "Detta är en jacka"
  }
]