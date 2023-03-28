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
      className="w-full text-center bg-gray-100 cursor-pointer py-1.5 hover:bg-gray-300"
    >
      {text}
    </Link>
  );
};

export default SubMenu;
