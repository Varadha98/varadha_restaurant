"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="text-center mt-10 text-xl font-semibold">🛍️ Your cart is empty</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center border-b py-4">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
          <div className="ml-4 flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p>Qty: {item.quantity}</p>
            <p>₹{item.price * item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      <div className="text-right font-bold text-xl mt-4">Total: ₹{total}</div>
      <div className="flex justify-between mt-6">
        <button onClick={clearCart} className="bg-gray-300 px-4 py-2 rounded">Clear</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Proceed to Payment</button>
      </div>
    </div>
  );
}
