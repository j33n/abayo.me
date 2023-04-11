import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

import { projects } from "../../data/projects";

const ProjectsSection = () => {
  const [showExternalLinkIcon, setShowExternalLinkIcon] = useState<
    number | null
  >(null);
  return (
    <section
      id="projects"
      className="flex flex-col justify-center mb-8 md:container md:mx-auto dark:bg-gray-900"
    >
      <p className="mb-4 text-xl w-fit">Projects</p>
      <div className="flex">
        {projects.map((project) => (
          <div
            className="relative max-w-[240px] even:ml-8"
            onMouseEnter={() => setShowExternalLinkIcon(project.id)}
            onMouseLeave={() => setShowExternalLinkIcon(null)}
          >
            {showExternalLinkIcon === project.id && (
              <div className="absolute top-1 right-1 bg-whiteA5">
                <GoLinkExternal size={24} className="text-gray-900" />
              </div>
            )}
            <Link href={project.link} rel="noopener noreferrer" target="_blank">
              <Image
                height={240}
                
                alt="ziadanet placeholder"
                src={project.img}
                className="rounded-md"
              />
              <div className="absolute bottom-0 text-white bg-gray-900 opacity-75 rounded-bl-md rounded-br-md">
                <p className="p-2 text-xs">
                  <span className="font-bold uppercase">{project.name}: </span>
                  {project.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
