import Link from "next/link";

import { Wrapper } from "../components";

const About = () => {
  return (
    <Wrapper>
      <p className="text-left">
        <b>Age:</b> 26 years old
        <br />
        <b>Location:</b> Rwanda, Kigali.
        <br />
        <b>Coding journey started:</b> at 16 in high school
        <br />
        <b>First job:</b> at 21, working for an automotive company called
        Mobiliti
        <br />
        <br />
        <br />
        Throughout my short carreer, I have worked with various companies and
        technologies.
        <br />
        I'm currently working on my second startup{" "}
        <a href="https://www.kuisoko.com" className="text-blue-600 underline">
          Kuisoko
        </a>
        .
        <br />
        <br />I love building complex user experiences and learning along the
        way.
      </p>
    </Wrapper>
  );
};

export default About;
