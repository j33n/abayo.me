import Link from 'next/link'

const HomeText = () => {
  return (
    <div className="grid items-center h-[calc(100vh_-_92px)] justify-items-center">
      <p className="text-left">
        Hello 👋, My name is Jean ABAYO and I love building awesome stuff
        <br />
        I'm a full-stack software developer with 4 years of experience
        <br />
        You can learn a bit{' '}
        <Link href="/about">
          <a className="text-blue-600 cursor-pointer">more about me here</a>
        </Link>
        <br />
        Reach out for mentorship, consulting or a gig at{' '}
        <a
          href="mailto:hello@abayo.me"
          className="text-blue-600 cursor-pointer "
        >
          hello@abayo.me
        </a>
      </p>
    </div>
  )
}

export default HomeText
