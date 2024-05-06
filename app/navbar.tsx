import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <a href="#" className="text-xl font-bold">Logo</a>
          </div>
          <div className="hidden md:block">
            <a href="#" className="text-white mx-4">Home</a>
            <a href="#" className="text-white mx-4">About</a>
            <a href="#" className="text-white mx-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;