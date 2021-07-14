import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SingleRow from "../mainLayout/singlerow/singleRow";
import ItemCard from "../mainLayout/items/itemsCard";
import SingleItem from "./SingleItem";
import ItemCard2 from "../mainLayout/items/itemsCard2";

// import ItemCard2 from "./itemsCard2";

function ItemList({ items, loading }) {
  return (
    <Grid item md={8} sm={9}>
      <Grid container>
        <SingleRow />
        <Grid container style={{ marginTop: "2rem" }}>
          {/* <ItemCard2 items={items} />  */}
          <ItemCard items={items} loading={loading} />
        </Grid>
        <SingleRow />
      </Grid>
    </Grid>
  );
}

export default ItemList;
