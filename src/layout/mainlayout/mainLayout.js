import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/main-header/header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
