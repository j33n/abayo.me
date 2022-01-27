import React, {useState} from 'react'

import Image from 'next/image'
import {Hamburger, Drawer, SubMenu} from '.'

import Logo from '../assets/logo.svg'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="px-5 bg-gray-800 columns-2" style={{height: '60px'}}>
      <div className="flex items-center h-full text-left">
        <Image src={Logo} alt="Jean Abayo's Logo" width={50} height={50} />
      </div>
      <div className="flex items-center justify-end h-full text-right">
        <Hamburger setIsOpen={setIsOpen} open={isOpen} />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <SubMenu text="About" />
        <SubMenu text="Contact" />
        {/* <SubMenu text="Portfolio" />
        <SubMenu text="Blog" /> */}
      </Drawer>
    </div>
  )
}

export default Menu
