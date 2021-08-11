import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/item-header/header";

function ItemLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default ItemLayout;
