import Image from "next/image";

import andelaLogo from "../assets/logos/andLogo.jpeg";
import mobilitiLogo from "../assets/logos/mobLogo.jpeg";
import inmLogo from "../assets/logos/inmLogo.jpeg";
import safLogo from "../assets/logos/safcomLogo.jpeg";
import ontfLogo from "../assets/logos/ontfLogo.jpeg";

import { IoIosSchool } from "react-icons/io";
import { MdDownload, MdWork } from "react-icons/md";
import carreer from "../data/carreer";
import Link from "next/link";

const logos = {
  ontf: ontfLogo,
  saf: safLogo,
  inm: inmLogo,
  mob: mobilitiLogo,
};

const ResumeRoute = () => {
  return (
    <section
      id="#companies"
      className="flex flex-col justify-center pl-8 mb-16 mr-4 bg-beige-100 md:container dark:bg-gray-900"
    >
      <div className="flex">
        <div className="flex-1">
          <p className="mb-4 text-xl">Experience</p>
        </div>
        <div className="flex justify-end flex-1 mr-6">
          <Link
            href="mailto:jeanabayo3@gmail.com"
            className="flex items-center p-2 text-gray-900 rounded bg-beige-300 w-fit"
          >
            <MdDownload size={32} />
            <p className="ml-2">Download</p>
          </Link>
        </div>
      </div>
      <ol className="ml-5 sm:border-l-2 border-info-100">
        {carreer.work.map((job) => (
          <li key={job.id}>
            <div className="flex items-center flex-start">
              <div className="-ml-[21px] sm:flex h-[40px] w-[40px] hidden items-center justify-center">
                <Image src={andelaLogo} alt="" className="rounded" />
              </div>
              <p className="font-bold sm:ml-10">{job.companyName}</p>
              <p className="ml-10 text-sm text-gray-500 dark:text-whiteA10">
                {job.startDate} - {job.endDate}
              </p>
            </div>
            <ol className="ml-4 border-l-2 sm:ml-20 border-info-100">
              {job.journey.map((work) => (
                <li key={work.id} className="mt-6">
                  <div className="flex items-center flex-start">
                    <div className="-ml-[21px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-info-100 text-info-700">
                      {!!logos[work.short] ? (
                        <Image
                          src={logos[work.short]}
                          alt=""
                          className="rounded"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-10 h-10 rounded dark:bg-white bg-beige-300">
                          <MdWork
                            size={32}
                            className="text-white dark:text-beige-300"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-1/2">
                      <p className="ml-5 font-bold">{work.name}</p>
                      <p className="ml-5 text-sm">{work.role}</p>
                    </div>
                    <div className="flex self-stretch justify-start">
                      <p className="sm:ml-5 text-sm text-gray-500 dark:text-whiteA10 mt-[2px]">
                        {work.startDate}
                        {work.showDuration
                          ? `(${work.duration})`
                          : ` - ${work.endDate}`}
                      </p>
                    </div>
                  </div>
                  <div className="w-10/12 mt-2 ml-10 rounded shadow-lg bg-blackA4 dark:bg-whiteA4">
                    {!!work.description && (
                      <p className="p-2">{work.description}</p>
                    )}
                    <div className="ml-2">
                      <p className="p-2 ml-2 text-sm">{work.summary}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
        <p className="mt-4 mb-2 text-xl sm:hidden">Education</p>
        {carreer.school.map((education) => (
          <li key={education.id} className="mt-4">
            <div className="flex items-center flex-start">
              <div className="-ml-[21px] hidden sm:flex items-center justify-center w-10 h-10 rounded dark:bg-white bg-beige-300">
                <IoIosSchool
                  size={32}
                  className="text-white dark:text-beige-300"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <p className="font-bold sm:ml-5">{education.name}</p>
                <p className="text-sm sm:ml-5">{education.fieldOfStudy}</p>
              </div>
              <div className="flex self-stretch justify-start">
                <p className="ml-10 text-sm text-gray-500 dark:text-whiteA10 mt-[2px]">
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            </div>
            {education.description && (
              <div className="w-10/12 mt-2 rounded shadow-lg sm:ml-10 bg-blackA4 dark:bg-whiteA4">
                <p className="p-2 ml-2 text-sm">{education.description}</p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ResumeRoute;
