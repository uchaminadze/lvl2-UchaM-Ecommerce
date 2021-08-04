import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SingleRow from "../../components/singlerow/singleRow";
import ItemCard from "../../components/items/itemsCard";
import Api from "../../api";
import Loader from "../../components/loader/loader";

// import ItemCard2 from "./itemsCard2";

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const changePage = (event, value) => {
    setIsLoading(true);
    Api.getProductList(`products?limit=${limit}&page=${value}`)
      .then((resp) => {
        setPage(value);
        setItems(resp);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Grid container>
      <SingleRow page={page} onChange={changePage} />
      <Grid container style={{ marginTop: "2rem" }}>
        {/* <ItemCard2 items={items} />  */}
        <ItemCard items={items} loading={loading} />
      </Grid>
      <SingleRow page={page} onChange={changePage} />
    </Grid>
  );
}

export default ItemList;
