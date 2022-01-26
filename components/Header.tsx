import Image from 'next/image'
import Logo from '../assets/logo.svg'

const Menu = () => {
  return (
    <>
      <div>
        <Image src={Logo} alt="Jean Abayo's Logo" width={50} height={50} />
      </div>
    </>
  )
}

export default Menu
