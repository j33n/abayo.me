import Link from 'next/link'

import {Wrapper} from '../components'

const About = () => {
  return (
    <Wrapper>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Wrapper>
  )
}

export default About
