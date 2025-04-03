
import { useState } from 'react';
import { CartItem as CartItemType } from '@/lib/types';
import { formatCurrency, getDiscountedPrice } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const price = product.discountPercentage
    ? getDiscountedPrice(product.price, product.discountPercentage)
    : product.price;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCart(product.id);
    }, 300);
  };

  return (
    <div 
      className={`flex items-center border-b py-4 transition-all duration-300 ${
        isRemoving ? 'opacity-0 transform -translate-x-4' : 'opacity-100'
      }`}
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="line-clamp-1">{product.name}</h3>
            <p className="ml-4">{formatCurrency(price * quantity)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        </div>
        
        <div className="flex flex-1 items-center justify-between text-sm mt-2">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-6 w-6" 
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
            >
              <MinusIcon className="h-3 w-3" />
            </Button>
            
            <span className="text-gray-700 w-6 text-center">{quantity}</span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-6 w-6" 
              onClick={handleIncreaseQuantity}
            >
              <PlusIcon className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="flex">
            <button 
              type="button" 
              className="text-sm font-medium text-beauty-600 hover:text-beauty-800 flex items-center"
              onClick={handleRemove}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
