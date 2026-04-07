import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

export default function ToggleSection() {
  const [view, setView] = useState("products");
  const { cart } = useCart();

  return (
    <section className="py-20 bg-base-200">

      <div className="max-w-[1200px] mx-auto px-6 text-center">

        <h2 className="text-3xl lg:text-4xl font-bold text-base-content">
          Premium Digital Tools
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        <div className="mt-8 inline-flex bg-white rounded-full p-1 shadow">

          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              view === "products"
                ? "bg-gradient-to-r from-purple-600 to-purple-900 text-white"
                : "text-gray-500"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              view === "cart"
                ? "bg-gradient-to-r from-purple-600 to-purple-900 text-white"
                : "text-gray-500"
            }`}
          >
            Cart ({cart.length})
          </button>

        </div>

        <div className="mt-12">
          {view === "products" ? (
            <div className="grid md:grid-cols-3 gap-5">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <Cart />
          )}
        </div>

      </div>
    </section>
  );
}