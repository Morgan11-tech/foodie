import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-[#D8F0F4] backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-3xl text-gray-900 font-bold">Foodie!</span>
            <div className="flex space-x-4 text-grey-900">
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar