import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/signin-header/header";
// import Header from "../../components/";

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
