// src/components/Layout.js
import React from "react";
import Header from "./Header"; // Importe seu navbar
import Footer from "./FooterBlock"; // Se tiver footer

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;