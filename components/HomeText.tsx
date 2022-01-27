import Link from 'next/link'

const HomeText = () => {
  return (
    //TODO: The div is taking the height of the screen for now
    <div className="grid items-center h-[calc(100vh_-_92px)] justify-items-center">
      <p className="text-left">
        Hello, My name is Jean ABAYO
        <br />
        I'm a software developer and I loooove building stuff
        <br />
        Checkout some of{' '}
        <Link href="/portfolio">
          <a>the things I've worked on</a>
        </Link>
        <br />
        If you're impressed{' '}
        <Link href="/contact">
          <a>contact me here</a>
        </Link>
        <br />
        Still not impressed, read{' '}
        <Link href="/about">
          <a>more about me</a>
        </Link>
        <br />
        In my free time I educate people on{' '}
        <Link href="/about">the most amazing blog on earth</Link>
      </p>
    </div>
  )
}

export default HomeText
