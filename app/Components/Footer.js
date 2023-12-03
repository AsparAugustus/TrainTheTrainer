"use client";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 hidden">
    <div className="max-w-screen-xl mx-auto text-center">
      <div className="flex justify-end items-center gap-x-10">
        <div className="flex items-center">
          <div
            onClick={() =>
              window.open("https://discord.gg/bhuqGzag4c", "_blank")
            }
            className="w-8 h-8 md:w-12 md:h-12 mr-4 flex items-center justify-center rounded-full bg-gray-900 md:mr-4 cursor-pointer hover:bg-gray-900"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </div>

          <div className="w-8 h-8 md:w-12 md:h-12 mr-4 flex items-center justify-center rounded-full bg-gray-900 md:mr-4 cursor-pointer hover:bg-gray-900">
    
          </div>
        </div>
      </div>
      {/* <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-800 mr-2 md:mr-0 cursor-pointer hover:bg-gray-900">
        <DonateWithCrypto />
      </div>
      <div className="ml-2 md:ml-4 mr-2 md:mr-4">
        <div className="hidden md:block">
          <KoFiButton />
        </div>
      </div> */}
    </div>

    <div className="max-w-screen-xl mx-auto text-center">
      &copy; 2023 LilithAI
    </div>
  </footer>
);
};

export default Footer