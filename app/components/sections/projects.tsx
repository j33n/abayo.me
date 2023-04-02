import Link from "next/link";
import { RiMailSendFill } from "react-icons/ri";

const ProjectsSection = () => {
  return (
    <section
      id="#companies"
      className="flex flex-col justify-center mb-8 md:container md:mx-auto dark:bg-gray-900"
    >
      <Link href="mailto:jeanabayo3@gmail.com" className="flex items-center p-2 text-gray-900 rounded bg-beige-300 w-fit">
        <RiMailSendFill size={32} />
        <p className="ml-2">reach out</p>
      </Link>
    </section>
  );
};

export default ProjectsSection;
