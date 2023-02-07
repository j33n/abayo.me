import React, {useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {Hamburger, Drawer, SubMenu} from '.'

import Logo from '../assets/logo.svg'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="px-5 bg-gray-800 columns-2" style={{height: '60px'}}>
      <div className="flex items-center h-full text-left">
        <Link href="/">
          <a className="flex h-full cursor-pointer">
            <Image
              src={Logo}
              alt="Jean Abayo's Logo"
              width={50}
              height={50}
              className="h-full"
            />
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-end h-full text-right">
        <Hamburger setIsOpen={setIsOpen} open={isOpen} />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <SubMenu text="More" href="/about" />
        {/* <SubMenu text="Blog - coming soon" /> */}
      </Drawer>
    </div>
  )
}

export default Menu
