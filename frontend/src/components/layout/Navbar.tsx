
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-eco-green-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8" />
            <span className="text-xl font-bold">E-WasteAid</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-eco-green-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-eco-green-200 transition-colors">About</Link>
            <Link to="/services" className="hover:text-eco-green-200 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-eco-green-200 transition-colors">Contact</Link>
            <Link to="/login">
              <Button variant="outline" className="bg-white text-eco-green-600 border-eco-green-100 hover:bg-eco-green-50">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-eco-green-700 hover:bg-eco-green-800">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link to="/" className="block hover:bg-eco-green-600 px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="block hover:bg-eco-green-600 px-3 py-2 rounded-md">About</Link>
            <Link to="/services" className="block hover:bg-eco-green-600 px-3 py-2 rounded-md">Services</Link>
            <Link to="/contact" className="block hover:bg-eco-green-600 px-3 py-2 rounded-md">Contact</Link>
            <Link to="/schedule-pickup" className="block hover:bg-eco-green-600 px-3 py-2 rounded-md font-medium">Schedule Pickup</Link>
            <Link to="/login" className="block hover:bg-eco-green-600 px-3 py-2 rounded-md">Login</Link>
            <Link to="/signup" className="block hover:bg-eco-green-600 px-3 py-2 rounded-md">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
