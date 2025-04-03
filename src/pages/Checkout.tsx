
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/data";

const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive an email confirmation shortly.",
      });
      clearCart();
      navigate("/");
    }, 1500);
  };

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="mb-1">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="mb-1">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email" className="mb-1">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="address" className="mb-1">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="mb-1">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="mb-1">State / Province</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="mb-1">Postal Code</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="country" className="mb-1">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-medium mb-4">Payment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="cardName" className="mb-1">Name on Card</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="cardNumber" className="mb-1">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="•••• •••• •••• ••••"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardExpiry" className="mb-1">Expiration Date</Label>
                    <Input
                      id="cardExpiry"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardCvc" className="mb-1">CVC</Label>
                    <Input
                      id="cardCvc"
                      name="cardCvc"
                      placeholder="•••"
                      value={formData.cardCvc}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white rounded-lg border p-6 sticky top-20">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              {/* Items */}
              <div className="max-h-64 overflow-y-auto mb-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex py-2 border-b">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-sm font-medium">
                        <h3 className="line-clamp-1">{item.product.name}</h3>
                        <p className="ml-1">
                          {formatCurrency(
                            item.product.discountPercentage 
                              ? item.product.price * (1 - item.product.discountPercentage / 100) * item.quantity 
                              : item.product.price * item.quantity
                          )}
                        </p>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <p>{item.product.brand}</p>
                        <p>Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="flow-root">
                <div className="divide-y">
                  <div className="py-4">
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-medium">{formatCurrency(subtotal)}</p>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <p className="text-gray-600">Shipping</p>
                      <p className="font-medium">$0.00</p>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <p className="text-gray-600">Tax</p>
                      <p className="font-medium">{formatCurrency(subtotal * 0.1)}</p>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="flex justify-between text-base font-medium">
                      <p>Total</p>
                      <p>{formatCurrency(subtotal * 1.1)}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Place order button */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-beauty-600 hover:bg-beauty-700"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                By placing your order, you agree to our{" "}
                <a href="#" className="text-beauty-600 hover:text-beauty-700">Terms and Conditions</a> and{" "}
                <a href="#" className="text-beauty-600 hover:text-beauty-700">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
