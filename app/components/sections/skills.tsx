import Image from "next/image";

const SkillsSection = () => {
  return (
    <section
      id="#skills"
      className="flex flex-col justify-center mb-8 md:container md:mx-auto"
    >
      <p className="mb-8 text-xl">Skills</p>
      Languages/Frameworks
      <div className="flex gap-4 flex-center">
        <Image width="100" height="100" alt="JavaScript" src="https://skillicons.dev/icons?i=js" />
        <Image width="100" height="100" alt="NodeJS" src="https://skillicons.dev/icons?i=nodejs" />
        <Image width="100" height="100" alt="TypeScript" src="https://skillicons.dev/icons?i=ts" />
        <Image width="100" height="100" alt="ReactJS" src="https://skillicons.dev/icons?i=react" />
        <Image width="100" height="100" alt="CSS" src="https://skillicons.dev/icons?i=css" />
        <Image width="100" height="100" alt="SASS" src="https://skillicons.dev/icons?i=sass" />
        <Image width="100" height="100" alt="TailwindCSS" src="https://skillicons.dev/icons?i=tailwind" />
        <Image width="100" height="100" alt="Python" src="https://skillicons.dev/icons?i=python" />
        <Image width="100" height="100" alt="Docker" src="https://skillicons.dev/icons?i=docker" />
        <Image width="100" height="100" alt="Git" src="https://skillicons.dev/icons?i=git" />
      </div>
    </section>
  );
};

export default SkillsSection;
// Expert, Intermediate, Competent, Beginner