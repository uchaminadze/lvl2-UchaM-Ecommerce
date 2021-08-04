import Colors from "./colors/colors";
import Condition from "./condition/condition";
import Price from "./price/price";
import Reviews from "./review/review";
import Search from "./search/search";
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
