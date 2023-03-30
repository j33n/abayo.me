import Image from "next/image";

import andelaLogo from "../../assets/logos/andelaLogo.png";
import mobilitiLogo from "../../assets/logos/mobilitiLogo.webp";
import InmLogo from "../../assets/logos/InmLogo.png";
import safLogo from "../../assets/logos/safLogo.png";
import on24Logo from "../../assets/logos/on24Logo.webp";

const ProjectsSection = () => {
  return (
    <section
      id="#companies"
      className="flex flex-col justify-center mb-8 bg-gray-500 md:container md:mx-auto dark:bg-gray-900"
    >
      <p className="">Companies</p>
      <div className="flex">
        <div className="flex bg-[#173b3f]">
          <Image width="150" height="50" src={andelaLogo} alt="Andela" />
          {/* Andela */}
        </div>
        <div className="flex">
          <Image width="150" height="50" src={mobilitiLogo} alt="Mobiliti" />
          {/* Mobiliti */}
        </div>
        <div className="flex">
          <Image width="150" height="50" src={InmLogo} alt="I&M Bank" />
          {/* I&M Bank */}
        </div>
        <div className="flex">
          <Image width="150" height="50" src={safLogo} alt="Safaricom" />
          {/* Safaricom */}
        </div>
        <div className="flex">
          <Image width="100" height="50" src={on24Logo} alt="On24" />
          {/* On24 */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
