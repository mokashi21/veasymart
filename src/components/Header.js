import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import logo from "../Photos/logo.png";
import { signIn } from "next-auth/client";

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-pink-400   p-1 flex-grow py-2">
        <div className="mt-2  flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            src={logo}
            width={40}
            height={4}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search */}
        <div
          className=" m-2 mt-4 hidden sm:flex items-center h-7 rounded-md

            flex-grow
            cursor-pointer
          bg-yellow-400
          hover:bg-yellow-500 "
        >
          <input
            className="  p-2 h-full
             w-15 flex-grow 
             flex-shrink 
             rounded-l-md 
             focus:outlined-none 
             px-10
            "
            type="text"
          />
          <SearchIcon className="h-12 p-4  " />
        </div>
        {/* right */}
        <div
          className="text-white 
        flex items-center text-xs space-x-6 
        mx-6 whitespace-nowrap "
        >
          <div onClick={signIn} className="link">
            <p>hello User</p>
            <p className="font-extrabold md:text-sm "> Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm "> & Orders</p>
          </div>

          <div className=" relative link flex items-center ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-green-300 text-center rounded-full text-black font-bold ">
              4
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2 ">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav  */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light">
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1 " />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Shopper ToolKit</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p>
      </div>
    </header>
  );
}

export default Header;
