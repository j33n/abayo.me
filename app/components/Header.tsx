'use client';

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Hamburger, Drawer, SubMenu } from ".";

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
    <div className="px-5 columns-2" style={{ height: "60px" }}>
      <div className="flex items-center h-full text-left">
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
      {isMobile ? (
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
      )}
      <div className="flex items-center text-left">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Menu;
2;
