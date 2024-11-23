import React from "react";

const Cart: React.FC = () => {
  // Example static cart items
  const cartItems = [
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 30 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="border-b py-2 flex justify-between items-center"
              >
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-500">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
