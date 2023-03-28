"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";
import IconButton from "./IconButton";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-full">
      {theme === "light" ? (
        <IconButton onClick={() => setTheme("dark")}>
          <CiLight size={32} />
        </IconButton>
      ) : (
        <IconButton onClick={() => setTheme("light")}>
          <CiDark size={32} />
        </IconButton>
      )}
    </div>
  );
};

export default ThemeChanger;
