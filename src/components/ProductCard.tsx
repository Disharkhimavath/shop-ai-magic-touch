
import { Link } from "react-router-dom";
import { Product } from "@/lib/types";
import { formatCurrency, getDiscountedPrice } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, name, brand, price, images, rating, discountPercentage } = product;
  
  const discountedPrice = discountPercentage 
    ? getDiscountedPrice(price, discountPercentage) 
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group product-card bg-white rounded-lg border overflow-hidden">
      <Link to={`/product/${id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={images[0]} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage && (
            <div className="absolute top-2 left-2 bg-beauty-600 text-white text-xs font-medium px-2 py-1 rounded">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-1">{brand}</div>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">{name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              {discountedPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-beauty-700 font-medium">{formatCurrency(discountedPrice)}</span>
                  <span className="text-gray-400 text-sm line-through">{formatCurrency(price)}</span>
                </div>
              ) : (
                <span className="text-beauty-700 font-medium">{formatCurrency(price)}</span>
              )}
            </div>
            <Button 
              onClick={handleAddToCart}
              size="sm" 
              className="bg-beauty-600 hover:bg-beauty-700"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
