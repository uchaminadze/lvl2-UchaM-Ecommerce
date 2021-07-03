import Colors from "./colors";
import Condition from "./condition";
import Price from "./price/price";
import Reviews from "./review";
import Search from "./search";
import Size from "./size/size";

function Filters() {
  return (
    <>
      <Search />
      <Condition />
      <Reviews />
      <Price />
      <Size />
      <Colors />
    </>
  );
}

export default Filters;
