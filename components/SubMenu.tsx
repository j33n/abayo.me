import React from 'react'

type SubMenuProps = {
  text: string
}

const SubMenu = ({text}: SubMenuProps) => {
  return (
    <div className="w-full text-center bg-gray-100 cursor-pointer py-1.5 hover:bg-gray-300">
      {text}
    </div>
  )
}

export default SubMenu
