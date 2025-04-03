
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { categories } from "@/lib/data";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-beauty-700 to-beauty-500 bg-clip-text text-transparent">BeautyShop</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-beauty-600 transition-colors">
              Home
            </Link>
            <div className="group relative">
              <span className="text-sm font-medium cursor-pointer hover:text-beauty-600 transition-colors">
                Categories
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-md shadow-lg w-64 p-4 animate-fade-in">
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="text-sm py-2 px-3 hover:bg-beauty-50 rounded-md hover:text-beauty-700 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/products" className="text-sm font-medium hover:text-beauty-600 transition-colors">
              All Products
            </Link>
            <Link to="/cart" className="text-sm font-medium hover:text-beauty-600 transition-colors">
              Cart
            </Link>
          </nav>

          {/* Search, cart and mobile menu */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-full border px-3 py-1.5">
              <Input
                type="search"
                placeholder="Search products..."
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-[200px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" size="sm" variant="ghost" className="h-7 w-7 p-0">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>

            {/* Cart button */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs bg-beauty-600 text-white rounded-full">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link to="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Categories</h3>
                    <div className="flex flex-col space-y-2 pl-2">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/products?category=${category.id}`}
                          className="text-sm py-1 hover:text-beauty-700"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link to="/products" className="text-lg font-medium">
                    All Products
                  </Link>
                  <Link to="/cart" className="text-lg font-medium">
                    Cart
                  </Link>
                  <form onSubmit={handleSearch} className="mt-4 flex items-center space-x-2 bg-gray-50 rounded-full border px-3 py-1.5">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button type="submit" size="sm" variant="ghost" className="h-7 w-7 p-0">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </form>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
