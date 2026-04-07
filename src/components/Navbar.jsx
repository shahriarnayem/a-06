import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="bg-base-200 py-3 px-5 sticky top-0 z-50">
      
      <div className="max-w-[1200px] mx-auto rounded-xl flex items-center justify-between">

        <div className="text-2xl font-bold text-primary">
          DigiTools
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          <a className="hover:text-primary cursor-pointer">Products</a>
          <a className="hover:text-primary cursor-pointer">Features</a>
          <a className="hover:text-primary cursor-pointer">Pricing</a>
          <a className="hover:text-primary cursor-pointer">Testimonials</a>
          <a className="hover:text-primary cursor-pointer">FAQ</a>
        </div>

        <div className="flex items-center gap-4">

          <div className="indicator cursor-pointer">
            <span className="indicator-item badge badge-secondary">
              {cart.length}
            </span>
            <FaShoppingCart size={18} />
          </div>

          <button className="btn btn-ghost">Login</button>

          <button className="btn btn-primary rounded-full px-6 hidden md:block">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}