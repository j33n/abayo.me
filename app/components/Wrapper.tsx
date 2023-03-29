"use client";

import React, { useEffect, useState } from "react";
import { Header, Content } from ".";

const Wrapper = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-auto">
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Wrapper;
