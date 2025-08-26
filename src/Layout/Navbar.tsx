import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-[var(--clr-primary)] flex justify-center p-4">
      <nav>
        <ul className="flex space-x-8 text-white font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About Us</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
