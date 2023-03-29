"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SlSocialGithub } from "react-icons/sl";

import ThemeChanger from "./ThemeChanger";
import Hamburger from "./Hamburger";
import Drawer from "./Drawer";
import SubMenu from "./SubMenu";
import IconButton from "./IconButton";

import { sacramento } from "../utils/fonts";

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
        <div className="flex flex-1 text-2xl select-none">
          <Link href="/" className={sacramento.className}>
            j33n
          </Link>
        </div>
        <div className="lg:flex lg:gap-x-12">
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
            <div className="flex gap-6">
              <SubMenu text="About" href="#about" />
              <SubMenu text="Skills" href="#skills" />
              <SubMenu text="Experience" href="#experience" />
            </div>
          )}
        </div>
        <div className="flex justify-end flex-1 space-x-4">
          <div className="flex items-center text-left">
            <ThemeChanger />
          </div>
          <Link
            href="https://github.com/j33n"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton>
              <SlSocialGithub
                size={32}
                className="text-black dark:text-white"
              />
            </IconButton>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
