import Link from 'next/link'

const HomeText = () => {
  return (
    <p className="text-left">
      Hello 👋, My name is Jean ABAYO and I love building awesome stuff
      <br />
      I'm a full-stack software developer with 5 years of experience
      <br />
      You can see some of my not best work on{" "}
      <Link href="https://github.com/j33n">
        <a className="text-blue-600 cursor-pointer">Github</a>
      </Link>
      <br />
      Also, you can view my{" "}
      <Link href="https://docs.google.com/document/d/1o2knodh2j9VtqvJ5J_tmnYC2ot7y7zPo7SUlC-5rqYc/edit?usp=sharing">
        <a className="text-blue-600 cursor-pointer">full resume here.</a>
      </Link>
      <br />
      <br />
      Reach out for mentorship, consulting or a job via{" "}
      <a
        href="mailto:jeanabayo3@gmail.com"
        className="text-blue-600 cursor-pointer "
      >
        email
      </a>
    </p>
  );
}

export default HomeText
