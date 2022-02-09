import React from 'react'

import Link from 'next/link'

type SubMenuProps = {
  text: string
  href?: string
}

const SubMenu = ({text, href}: SubMenuProps) => {
  return (
    <div className="w-full text-center bg-gray-100 cursor-pointer py-1.5 hover:bg-gray-300">
      <Link href={href}>{text}</Link>
    </div>
  )
}

export default SubMenu
