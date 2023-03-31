import Image from "next/image";
import { ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";

import { skills } from "../../data/skills";

const SkillBox = ({ children }: { children: ReactNode }) => (
  <div className="flex">{children}</div>
);

const SkillWithLevel = ({ skill, level }) => {
  return (
    <div className="px-2">
      <p className="text-sm">{skill}</p>
      <p
        className={`p-0.5 text-xs rounded-sm ${level.color} text-center text-white`}
      >
        {level.val}
      </p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center mb-8 md:container md:mx-auto"
    >
      <p className="mb-4 text-xl w-fit">Skills</p>

      <Tabs.Root className="flex flex-col w-9/10" defaultValue="languages">
        <Tabs.List
          // className="flex border-b shrink-0 border-mauve6"
          className="flex border-b shrink-0"
          aria-label="Skills"
        >
          {skills.map((skill) => (
            <Tabs.Trigger
              className="px-4 h-[40px] flex-1 flex items-center justify-center text-sm leading-none select-none font-normal hover:text-beige-400 dark:hover:text-beige-300 dark:data-[state=active]:text-beige-300 data-[state=active]:text-beige-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] dark:data-[state=active]:shadow-beige-300 data-[state=active]:shadow-beige-400 data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] dark:data-[state=active]:focus:shadow-beige-300 data-[state=active]:focus:shadow-beige-400 outline-none cursor-default"
              value={skill.name}
            >
              {skill.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {skills.map((skill) => (
          <Tabs.Content
            className="flex flex-wrap gap-4 grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-beige-400 dark:focus:shadow-beige-300 data-[state=inactive]:hidden"
            value={skill.name}
          >
            {skill.talents.map((talent) => (
              <div className="gap-4 border-[1px] border-gray-300 dark:border-gray-700 rounded-[10px] flex-center p-[1px]">
                <SkillBox>
                  {!!talent.icon && (
                    <Image
                      width="40"
                      height="40"
                      alt={talent.name}
                      src={talent.icon}
                    />
                  )}
                  <SkillWithLevel
                    skill={talent.name}
                    level={talent.proficiency}
                  />
                </SkillBox>
              </div>
            ))}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
};

export default SkillsSection;
