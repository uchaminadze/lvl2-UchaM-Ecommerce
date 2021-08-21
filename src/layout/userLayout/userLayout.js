import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/user-header/header";
// import Header from "../../components/";

function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default UserLayout;
