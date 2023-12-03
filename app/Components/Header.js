import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav
      style={{
        backgroundImage: 'url("/orange_background.webp")',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        width: '100%',
        zIndex: 10,
      }}
      className="max-w mx-auto flex justify-between items-center py-2 shadow-md"
    >
      <div className="flex-none sm:w-1/6 lg:w-3/6"></div>
      <div className="relative flex-grow">
        <Image
          className="rounded-lg hidden lg:block"
          src="/Box_long.png"
          alt="Button"
          width={800}
          height={60}
        />

        {/* Button Container */}
        <div className="absolute inset-0 flex items-center justify-center space-x-5">
          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Button 1 */}
            <button
              className="font-comic-sans text-black text-md lg:text-xl p-4 border-none cursor-pointer transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
            >
              About
            </button>

            {/* Button 2 */}
            <button
              className="font-comic-sans text-black text-md lg:text-xl p-4 border-none cursor-pointer transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white whitespace-nowrap"
            >
              Book a session
            </button>

            {/* Button 3 */}
            <button
              className="font-comic-sans text-black text-md lg:text-xl p-4 border-none cursor-pointer transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
            >
              FAQs
            </button>

            {/* Button 4 */}
            <button
              className="font-comic-sans text-black text-md lg:text-xl p-4 border-none cursor-pointer transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="flex-none w-1/6"></div>
    </nav>
  );
};

export default Header;
