// src/app/cart/page.tsx
export default function CartPage() {
  // Later you can fetch cart items from DB or state
  const cartItems = [
    { id: 1, name: "Idli", price: 40, quantity: 2 },
    { id: 2, name: "Dosa", price: 60, quantity: 1 },
  ];

  // calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-3"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price} × {item.quantity}</p>
                </div>
                <p className="font-bold">₹{item.price * item.quantity}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
