import Link from 'next/link'

const HomeText = () => {
  return (
    // The div is taking the height of the screen for now
    <div className="grid items-center h-screen justify-items-center">
      <p className="text-left">
        Hello, My name is Jean ABAYO
        <br />
        I'm a software developer and I loooove building stuff
        <br />
        Checkout some of{' '}
        <Link href="/portfolio">the things I've worked on</Link>
        <br />
        If you're impressed <Link href="/contact">contact me here</Link>
        <br />
        Still not impressed, read <Link href="/about">more about me</Link>
        <br />
        In my free time I educate people on{' '}
        <Link href="/about">the most amazing blog on earth</Link>
      </p>
    </div>
  )
}

export default HomeText
