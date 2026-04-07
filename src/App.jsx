import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <Hero />
      <Stats />
      <ToggleSection />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
      <ToastContainer />
    </CartProvider>
  );
}

