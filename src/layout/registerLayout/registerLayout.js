import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/register-header/header";

function RegisterLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default RegisterLayout;
