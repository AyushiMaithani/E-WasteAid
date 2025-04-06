
import { Link } from "react-router-dom";
import { Recycle, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-green-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8" />
              <span className="text-xl font-bold">E-WasteAid</span>
            </div>
            <p className="text-eco-green-100 mb-4">
              Making e-waste recycling accessible for everyone. Together we can make a difference for our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-eco-green-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-eco-green-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-eco-green-200">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@ewasteaid.com" className="text-white hover:text-eco-green-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-eco-green-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-eco-green-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-eco-green-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-eco-green-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Users</h3>
            <ul className="space-y-3">
              <li><Link to="/login" className="text-eco-green-100 hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/signup" className="text-eco-green-100 hover:text-white transition-colors">Sign Up</Link></li>
              <li><Link to="/request-pickup" className="text-eco-green-100 hover:text-white transition-colors">Request Pickup</Link></li>
              <li><Link to="/drop-locations" className="text-eco-green-100 hover:text-white transition-colors">Drop-off Locations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-eco-green-100">
              <li>123 Recycling Way</li>
              <li>Green City, EC0 123</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@ewasteaid.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-eco-green-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-eco-green-200">
          <p>© 2025 E-WasteAid. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
