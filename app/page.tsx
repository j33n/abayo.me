"use client";

import React from "react";
import AboutSection from "./components/sections/about";
import SkillsSection from "./components/sections/skills";
import ProjectsSection from "./components/sections/projects";

const IndexRoute = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default IndexRoute;
