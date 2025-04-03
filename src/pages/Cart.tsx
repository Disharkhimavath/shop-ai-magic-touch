
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/data";

const Cart = () => {
  const { cart, clearCart, subtotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      navigate("/checkout");
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <ShoppingCart className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border p-6">
                <div className="flow-root">
                  <div className="divide-y">
                    {cart.map((item) => (
                      <CartItem key={item.product.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline" 
                    asChild
                  >
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => clearCart()}
                    className="text-beauty-600 hover:text-beauty-700 hover:bg-beauty-50"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div>
              <div className="bg-white rounded-lg border p-6 sticky top-20">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                <div className="flow-root">
                  <div className="divide-y">
                    <div className="py-4">
                      <div className="flex justify-between text-sm">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="font-medium">{formatCurrency(subtotal)}</p>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <p className="text-gray-600">Shipping</p>
                        <p className="font-medium">Calculated at checkout</p>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex justify-between text-base font-medium">
                        <p>Total</p>
                        <p>{formatCurrency(subtotal)}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Taxes calculated at checkout
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full mt-4 bg-beauty-600 hover:bg-beauty-700"
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    "Processing..."
                  ) : (
                    <>
                      Checkout <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                <div className="mt-4 text-xs text-center text-gray-500">
                  Secure checkout powered by Stripe
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
