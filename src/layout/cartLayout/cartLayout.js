import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/cart-header/header";

function CartLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default CartLayout;
