import React from "react";

import Link from "next/link";

type SubMenuProps = {
  text: string;
  href?: string;
};

const SubMenu = ({ text, href }: SubMenuProps) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
};

export default SubMenu;
