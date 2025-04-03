
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  // Featured products - take first 8 products
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Your Beauty, <span className="text-beauty-600">Enhanced</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-md">
                  Discover premium beauty products that help you look and feel your best, curated just for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-beauty-600 hover:bg-beauty-700">
                    <Link to="/products">Shop Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/products?category=skincare">Skincare</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop"
                  alt="Beauty products showcase"
                  className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="text-sm font-medium">New Arrivals</div>
                  <div className="text-beauty-600 font-bold">Up to 25% Off</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
              <Link to="/products" className="text-beauty-600 hover:text-beauty-700 font-medium text-sm">
                View All Categories
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="category-card bg-white rounded-lg overflow-hidden border text-center hover:border-beauty-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.itemCount} products</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
              <Link to="/products" className="text-beauty-600 hover:text-beauty-700 font-medium text-sm">
                View All Products
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-beauty-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Beauty Community</h2>
                  <p className="text-gray-600 mb-6">
                    Get early access to new products, exclusive offers, and beauty tips.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 rounded-md flex-grow border focus:outline-none focus:ring-2 focus:ring-beauty-600"
                    />
                    <Button className="bg-beauty-600 hover:bg-beauty-700">
                      Subscribe
                    </Button>
                  </form>
                </div>
                <div className="hidden md:flex justify-end">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop"
                    alt="Beauty products"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
