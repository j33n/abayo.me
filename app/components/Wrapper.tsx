import React from "react";
import { Header, Footer, Content } from ".";

const Wrapper = ({ children }) => {
  return (
    <div className="mx-auto">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Wrapper;
