import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white pt-16 pb-8">
      
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">DigiTools</h2>
            <p className="mt-4 text-white/70 max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-4">Social Links</h3>
            <div className="flex gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 cursor-pointer">
                <FaXTwitter />
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}