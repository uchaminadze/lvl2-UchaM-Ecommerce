import React from "react";
import Footer from "../../components/footer/footer";

function AdminLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default AdminLayout;
