"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { SlSocialGithub } from "react-icons/sl";

import ThemeChanger from "./ThemeChanger";
import Hamburger from "./Hamburger";
import Drawer from "./Drawer";
import IconButton from "./IconButton";

import { sacramento } from "../utils/fonts";
import clsx from "clsx";

export const MenuLink = ({
  href,
  children,
  cx,
  ...props
}: {
  href: string;
  children: ReactNode;
  cx?: string | "";
}) => (
  <Link
    {...props}
    href={href}
    className={clsx(
      "h-full text-lg font-semibold leading-6 border-transparent cursor-pointer border-b-3 hover:border-gray-300 text-beige-400 dark:text-beige-300",
      cx
    )}
  >
    {children}
  </Link>
);

export const GithubLink = ({ cx }: { cx: string }) => (
  <Link
    href="https://github.com/j33n"
    rel="noopener noreferrer"
    target="_blank"
    className={cx}
  >
    <IconButton>
      <SlSocialGithub size={32} className="text-black dark:text-white" />
    </IconButton>
  </Link>
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex w-full md:w-auto lg:gap-x-12">
          <div className="flex w-full md:hidden">
            <div className="flex items-center justify-end w-full h-full text-right">
              <Hamburger setIsOpen={setIsOpen} open={isOpen} />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <MenuLink href="resume" cx="text-center p-2 mb-2">
                Resume
              </MenuLink>
              <div className="flex flex-row border-white border-1">
                <div className="flex-1">
                  <ThemeChanger />
                </div>
                <div className="flex justify-center flex-1 border-1">
                  <GithubLink cx="flex" />
                </div>
              </div>
            </Drawer>
          </div>
          <div className="hidden gap-6 md:flex">
            {/* <MenuLink href="projects">Projects</MenuLink> */}
            <MenuLink href="resume">Resume</MenuLink>
          </div>
        </div>
        <div className="flex justify-end flex-1 space-x-4">
          <div className="items-center hidden text-left md:flex">
            <ThemeChanger />
          </div>
          <GithubLink cx="hidden md:flex" />
        </div>
      </nav>
    </header>
  );
};

export default Menu;
