import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

import ziadanetImg from "../../assets/ziadanet.png";
import { useState } from "react";

const ProjectsSection = () => {
  const [showExternalLinkIcon, setShowExternalLinkIcon] =
    useState<boolean>(false);
  return (
    <section
      id="contact"
      className="flex flex-col justify-center mb-8 md:container md:mx-auto dark:bg-gray-900"
    >
      <p className="mb-4 text-xl w-fit">Projects</p>
      <div className="">
        <div
          className="relative max-w-[240px]"
          onMouseEnter={() => setShowExternalLinkIcon(true)}
          onMouseLeave={() => setShowExternalLinkIcon(false)}
        >
          {showExternalLinkIcon && (
            <div className="absolute top-1 right-1 bg-whiteA5">
              <GoLinkExternal size={24} className="text-gray-900" />
            </div>
          )}
          <Link
            href="https://ziadanet.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              height={240}
              width={240}
              alt="ziadanet placeholder"
              src={ziadanetImg}
              className="rounded-md"
            />
            <div className="absolute bottom-0 text-black rounded-bl-md rounded-br-md bg-blackA7">
              <p className="p-2 text-xs">
                <span className="font-bold">ZIADANET</span> is a solution for
                onboarding, leave and expenses management for
                businesses
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
