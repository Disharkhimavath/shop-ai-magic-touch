
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { products, formatCurrency, getDiscountedPrice, getRelatedProducts } from "@/lib/data";
import { Product } from "@/lib/types";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);

    // Simulate API call with timeout
    setTimeout(() => {
      if (productId) {
        const foundProduct = products.find((p) => p.id === productId);
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getRelatedProducts(productId, 4));
        }
      }
      setLoading(false);
    }, 500);
  }, [productId]);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container px-4 py-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-lg aspect-square"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-24 bg-gray-200 rounded w-full"></div>
                <div className="h-10 bg-gray-200 rounded w-1/4"></div>
                <div className="h-12 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const discountedPrice = product.discountPercentage 
    ? getDiscountedPrice(product.price, product.discountPercentage) 
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 py-8">
        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white border rounded-lg overflow-hidden">
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 border-2 rounded overflow-hidden ${
                    activeImageIndex === index 
                      ? "border-beauty-600" 
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500">{product.brand}</p>
              
              {/* Rating */}
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4">
                {discountedPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-beauty-700">{formatCurrency(discountedPrice)}</span>
                    <span className="text-gray-500 line-through">{formatCurrency(product.price)}</span>
                    <span className="bg-beauty-100 text-beauty-800 text-xs px-2 py-0.5 rounded">
                      {product.discountPercentage}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-beauty-700">{formatCurrency(product.price)}</span>
                )}
              </div>
            </div>

            {/* Short description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Add to cart button */}
            <Button 
              onClick={handleAddToCart} 
              className="w-full md:w-auto bg-beauty-600 hover:bg-beauty-700"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>

            {/* Product features */}
            <div className="mt-8 border-t pt-6">
              <h3 className="font-medium mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-sm">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="mb-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-gray-600">
            <p className="mb-4">{product.description}</p>
            <p>Our {product.name} is specially formulated to give you the best results. The high-quality ingredients ensure effectiveness and safety for all skin types.</p>
          </TabsContent>
          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h3 className="font-medium mb-2">Product Information</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between pb-2 border-b">
                    <span className="text-gray-600">Brand</span>
                    <span>{product.brand}</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b">
                    <span className="text-gray-600">Category</span>
                    <span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b">
                    <span className="text-gray-600">Subcategory</span>
                    <span>{product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1)}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Product Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
