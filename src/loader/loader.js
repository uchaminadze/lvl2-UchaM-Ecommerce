import React from "react";
import "./loader.scss";

const Loader = ({ isLoading, children }) => {
  if (isLoading) return <div className="lds-dual-ring"></div>;

  return children;
};

export default Loader;
