import React from "react";
import PriceInputs from "./priceInputs";
import PriceRadio from "./priceRadio";
import PriceRange from "./priceRange";

function Price() {
  return (
    <div style={{ width: "100%" }}>
      <PriceRadio />
      <PriceInputs />
      <PriceRange />
    </div>
  );
}

export default Price;
