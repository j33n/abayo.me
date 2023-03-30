"use client";

import React, { useEffect, useState } from "react";
import AboutSection from "./components/sections/about";
import SkillsSection from "./components/sections/skills";
import ProjectsSection from "./components/sections/projects";
import { Footer } from "./components";

const IndexRoute = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default IndexRoute;
