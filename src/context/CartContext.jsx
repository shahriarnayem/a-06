import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.warning("Already in cart");
      return;
    }
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.info("Removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Checkout successful");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}