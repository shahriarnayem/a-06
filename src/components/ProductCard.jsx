import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const Icon = product.icon;

  const added = cart.find((item) => item.id === product.id);

  return (
    <div className="bg-base-100 rounded-xl border p-6 relative flex flex-col gap-5 shadow-sm hover:shadow-lg transition text-left">

      {/* TAG */}
      <span className={`absolute right-6 top-6 text-xs px-3 py-1 rounded-full ${product.tagType}`}>
        {product.tag}
      </span>

      {/* ICON */}
      <div className="w-12 h-12 flex items-center justify-center bg-base-200 rounded-full">
        <Icon size={22} className="text-primary" />
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-bold text-base-content">
        {product.name}
      </h2>

      {/* DESC */}
      <p className="text-sm text-gray-500">
        {product.description}
      </p>

      {/* PRICE */}
      <div className="text-2xl font-bold text-base-content">
        ${product.price}
        <span className="text-sm text-gray-400 font-normal">
          /{product.period}
        </span>
      </div>

      {/* FEATURES */}
      <ul className="space-y-2 text-sm text-gray-600">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            {f}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => addToCart(product)}
        className={`mt-auto w-full py-3 rounded-full font-medium transition ${
          added
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
        }`}
      >
        {added ? "Added" : "Buy Now"}
      </button>

    </div>
  );
}