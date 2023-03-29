import React from "react";

import Link from "next/link";

type SubMenuProps = {
  text: string;
  href?: string;
};

const SubMenu = ({ text, href }: SubMenuProps) => {
  return (
    <Link
      href={href}
      className="h-full text-lg font-semibold leading-6 cursor-pointer text-beige-400 dark:text-beige-300 hover:bg-gray-300"
    >
      {text}
    </Link>
  );
};

export default SubMenu;
