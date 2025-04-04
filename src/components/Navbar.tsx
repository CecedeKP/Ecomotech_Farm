
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-poultry-brown">Poultry<span className="text-poultry-green">Farm</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium link-hover">Home</Link>
            <Link to="/shop" className="font-medium link-hover">Shop</Link>
            <Link to="/services" className="font-medium link-hover">Services</Link>
            <Link to="/about" className="font-medium link-hover">About</Link>
            <Link to="/contact" className="font-medium link-hover">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-poultry-brown" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5 text-poultry-brown" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-poultry-yellow text-poultry-brown rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5 text-poultry-brown" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-poultry-yellow text-poultry-brown rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/services" className="font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/about" className="font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/account" className="font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>My Account</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
