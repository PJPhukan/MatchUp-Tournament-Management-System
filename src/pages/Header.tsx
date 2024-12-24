import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import homeImg from "../assets/homeImg.png";
import Image from "next/image";
import { Search } from "lucide-react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
const Header = () => {
  return (
  
    <BackgroundGradientAnimation className="overflow-x-hidden">
      <div className=" overflow-x-hidden absolute z-50 inset-0 flex items-center flex-col justify-center text-white font-bold px-4 pointer-events-none text-5xl text-center md:text-6xl lg:text-7xl">
        <p className="overflow--hidden bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 w-full md:w-2/3">
          <span className="font-bold">Organize </span> and
          <span className="font-bold"> Join</span> Tournaments with Ease
        </p>
        <p className="font-thin text-gray-700  mb-3 text-base  overflow--hidden bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 w-full md:w-2/3">
          MatchUp brings organizers and players together on a single platform.
          Create, manage, and discover tournaments effortlessly, and elevate
          your competitive experience.
        </p>
        <div className="flex items-center  w-full lg:w-1/2 md:gap-2 gap-1 justify-center">
          <div className="flex items-center bg-white gap-2 rounded-md md:px-3 px-2 shadow-lg">
            <Search className="text-gray-700"/>
            <input
              type="text"
              placeholder="Search for any service"
              className="md:py-3 py-1.5 w-full text-gray-700 focus:outline-none rounded md:text-2xl sm:text-xl text-base z-1000"
            />
          </div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 md:px-5 sm:px-3 px-1 md:py-3 py-1.5 md:text-2xl sm:text-xl text-base rounded-md ">
            Search
          </button>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Header;
