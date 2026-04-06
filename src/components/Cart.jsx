import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, total, clearCart } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 shadow mb-3"
              >
                <div className="flex items-center gap-3">
                  <Icon />
                  <span>{item.name}</span>
                </div>
                <div>
                  ${item.price}
                  <button
                    className="btn btn-sm btn-error ml-3"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          <h3 className="text-xl font-bold mt-4">Total: ${total}</h3>

          <button className="btn btn-primary mt-3" onClick={clearCart}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}