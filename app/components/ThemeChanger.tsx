"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";
import IconButton from "./IconButton";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-full">
      {theme === "light" ? (
        <IconButton onClick={() => setTheme("dark")}>
          <CiLight size={40} />
        </IconButton>
      ) : (
        <IconButton onClick={() => setTheme("light")}>
          <CiDark size={40} />
        </IconButton>
      )}
    </div>
  );
};

export default ThemeChanger;
