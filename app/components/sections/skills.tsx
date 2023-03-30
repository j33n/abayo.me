import Image from "next/image";

const SkillsSection = () => {
  return (
    <section
      id="#skills"
      className="flex flex-col justify-center mb-8 md:container md:mx-auto"
    >
      <p className="mb-4 text-lg">Skills</p>
      <p className="text-md">Languages/Frameworks</p>
      <div className="flex flex-wrap gap-4 py-2 flex-center">
        <Image
          width="40"
          height="40"
          alt="JavaScript"
          src="https://skillicons.dev/icons?i=js"
        />
        <Image
          width="40"
          height="40"
          alt="TypeScript"
          src="https://skillicons.dev/icons?i=ts"
        />
        <Image
          width="40"
          height="40"
          alt="NodeJS"
          src="https://skillicons.dev/icons?i=nodejs"
        />
        <Image
          width="40"
          height="40"
          alt="ReactJS"
          src="https://skillicons.dev/icons?i=react"
        />
        <Image
          width="40"
          height="40"
          alt="Jest"
          src="https://skillicons.dev/icons?i=jest"
        />
        <Image
          width="40"
          height="40"
          alt="Redux"
          src="https://skillicons.dev/icons?i=redux"
        />
        <Image
          width="40"
          height="40"
          alt="Remix"
          src="https://skillicons.dev/icons?i=remix"
        />
        <Image
          width="40"
          height="40"
          alt="NextJS"
          src="https://skillicons.dev/icons?i=nextjs"
        />
        <Image
          width="40"
          height="40"
          alt="GraphQL"
          src="https://skillicons.dev/icons?i=graphql"
        />
        <Image
          width="40"
          height="40"
          alt="Python"
          src="https://skillicons.dev/icons?i=python"
        />
      </div>
      <p className="text-md">Styling</p>
      <div className="flex gap-4 py-2 flex-center">
        <Image
          width="40"
          height="40"
          alt="CSS"
          src="https://skillicons.dev/icons?i=css"
        />
        <Image
          width="40"
          height="40"
          alt="SASS"
          src="https://skillicons.dev/icons?i=sass"
        />
        <Image
          width="40"
          height="40"
          alt="TailwindCSS"
          src="https://skillicons.dev/icons?i=tailwind"
        />
        <Image
          width="40"
          height="40"
          alt="TailwindCSS"
          src="https://skillicons.dev/icons?i=styledcomponents"
        />
      </div>
      <p className="mb-2 text-md">Infra/Tooling</p>
      <div className="flex gap-4 py-2 flex-center">
        <Image
          width="40"
          height="40"
          alt="Git"
          src="https://skillicons.dev/icons?i=git"
        />
        <Image
          width="40"
          height="40"
          alt="CSS"
          src="https://skillicons.dev/icons?i=jenkins"
        />
        <Image
          width="40"
          height="40"
          alt="Docker"
          src="https://skillicons.dev/icons?i=docker"
        />
        <Image
          width="40"
          height="40"
          alt="AWS"
          src="https://skillicons.dev/icons?i=aws"
        />
      </div>
      <p className="mb-2 text-md">Storage</p>
      <div className="flex gap-4 py-2 flex-center">
        <Image
          width="40"
          height="40"
          alt="Postgres"
          src="https://skillicons.dev/icons?i=postgres"
        />
        <Image
          width="40"
          height="40"
          alt="Firebase"
          src="https://skillicons.dev/icons?i=firebase"
        />
        <Image
          width="40"
          height="40"
          alt="MongoDB"
          src="https://skillicons.dev/icons?i=mongo"
        />
      </div>
      <p className="mb-2 text-md">Others</p>
      <div className="flex gap-4 py-2 flex-center">
        <Image
          width="40"
          height="40"
          alt="Figma"
          src="https://skillicons.dev/icons?i=figma"
        />
        <Image
          width="40"
          height="40"
          alt="Linux"
          src="https://skillicons.dev/icons?i=linux"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
// Expert, Intermediate, Competent, Beginner