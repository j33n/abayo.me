import Link from "next/link";

import { Wrapper } from "../components";

const About = () => {
  return (
    <Wrapper>
      <p className="text-left">
        <b>Current Age:</b> 26 years old
        <br />
        <b>Current Location:</b> Rwanda, Kigali.
        <br />
        <b>Coding Journey Inception:</b> 16 years old in High School.
        <br />
        <b>First Job:</b> at 21, working for an automotive company called
        Mobiliti.
        <br />
        <b>Favorite Stack:</b> ReactJS, GraphQL, Node.js, PostgreSQL, TypeScript
        <br />
        <br />
        Throughout my short carreer, I have worked with various companies and
        technologies.
        <br />
        I'm currently working on my second startup{" "}
        <Link href="https://kuisoko.com/">
          <a className="text-blue-600 underline">Kuisoko</a>
        </Link>
        .
        <br />
        <br />I love building complex user experiences and learning a tone of
        stuff along the way.
      </p>
    </Wrapper>
  );
};

export default About;
