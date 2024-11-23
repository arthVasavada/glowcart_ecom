import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to GlowKart</h1>
      <p className="mb-8">Your one-stop shop for all things trendy and useful!</p>
      <Link
        to="/products"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
