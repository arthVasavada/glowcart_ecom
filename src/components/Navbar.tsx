import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">GlowKart</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="hover:underline">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
