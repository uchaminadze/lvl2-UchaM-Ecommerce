import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function SigninLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default SigninLayout;
