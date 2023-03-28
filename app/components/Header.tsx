'use client';

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/logo.svg";
import ThemeChanger from "./ThemeChanger";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <header className="">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="flex h-full cursor-pointer">
            <Image
              src={Logo}
              alt="Jean Abayo's Logo"
              width={50}
              height={50}
              className="h-full"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </div>
        <div className="flex items-center text-left">
          <ThemeChanger />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* {isMobile ? (
            <>
              <div className="flex items-center justify-end h-full text-right">
                <Hamburger setIsOpen={setIsOpen} open={isOpen} />
              </div>
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <SubMenu text="More" href="/about" />
              </Drawer>
            </>
          ) : (
            <div className="flex items-center h-full">
              <SubMenu text="More" href="/resume" />
            </div>
          )} */}
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Github <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Menu;

