import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SingleRow from "../../components/singlerow/singleRow";
import ItemCard from "../../components/items/itemsCard";
import Api from "../../api";
import Loader from "../../components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { setProd } from "../../store/products/prodActCrt";
import { selectProd } from "../../store/products/prodSelector";

// import ItemCard2 from "./itemsCard2";

function ItemList() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const changePage = (event, value) => {
    Api.getProductList(`products?limit=${limit}&page=${value}`)
      .then(() => {
        setPage(value);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Grid container>
      <SingleRow page={page} onChange={changePage} />
      <Grid container style={{ marginTop: "2rem" }}>
        {/* <ItemCard2 items={items} />  */}
        <ItemCard />
      </Grid>
      <SingleRow page={page} onChange={changePage} />
    </Grid>
  );
}

export default ItemList;
