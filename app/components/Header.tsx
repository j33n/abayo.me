"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

import ThemeChanger from "./ThemeChanger";
import Hamburger from "./Hamburger";
import Drawer from "./Drawer";
import IconButton from "./IconButton";

import { sacramento } from "../utils/fonts";
import clsx from "clsx";
import { SkeletonHeader } from "./Skeleton";

export const MenuLink = ({
  href,
  children,
  cx,
  active,
  ...props
}: {
  href: string;
  children: ReactNode;
  cx?: string | "";
  active?: boolean;
}) => (
  <Link
    {...props}
    href={href}
    className={clsx(
      "h-full text-md flex items-center justify-center bg-beige-300 text-gray-900 rounded-full font-semibold leading-6 cursor-pointer border-b-2 hover:border-gray-600",
      cx,
      { "border-gray-300": active, "border-transparent": !active }
    )}
  >
    {children}
  </Link>
);

export const IconLink = ({
  cx,
  href,
  children,
}: {
  cx: string;
  href: string;
  children: ReactNode;
}) => (
  <Link href={href} rel="noopener noreferrer" target="_blank" className={cx}>
    <IconButton>{children}</IconButton>
  </Link>
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SkeletonHeader />;
  }

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
              <div className="flex flex-row border-white border-1">
                <div className="flex-1">
                  <ThemeChanger />
                </div>
                <div className="flex justify-center flex-1 border-1">
                  <IconLink cx="flex" href="https://github.com/j33n">
                    <SlSocialGithub
                      size={32}
                      className="text-black dark:text-white"
                    />
                  </IconLink>
                </div>
                <div className="flex justify-center flex-1 border-1">
                  <IconLink cx="flex" href="https://linkedin.com/in/jeanabayo">
                    <SlSocialLinkedin
                      size={28}
                      className="text-black dark:text-white"
                    />
                  </IconLink>
                </div>
              </div>
              <MenuLink href="resume" cx="p-2 mt-4">
                Resume
              </MenuLink>
            </Drawer>
          </div>
          {/* <MenuLink href="projects">Projects</MenuLink> */}
          {/* <MenuLink href="projects">Projects</MenuLink> */}
        </div>

        <div className="flex justify-end flex-1 space-x-4">
          <div className="items-center hidden text-left md:flex">
            <ThemeChanger />
          </div>
          <IconLink cx="hidden md:flex" href="https://github.com/j33n">
            <SlSocialGithub size={32} className="text-black dark:text-white" />
          </IconLink>
          <IconLink
            cx="hidden md:flex"
            href="https://linkedin.com/in/jeanabayo"
          >
            <SlSocialLinkedin
              size={28}
              className="text-black dark:text-white"
            />
          </IconLink>
          <div className="hidden gap-6 md:flex">
            <MenuLink
              href="resume"
              active={path === "/resume"}
              cx="px-8"
            >
              Resume
            </MenuLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
