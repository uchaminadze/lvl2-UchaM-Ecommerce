import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SingleRow from "../mainLayout/singlerow/singleRow";
import ItemCard from "../mainLayout/items/itemsCard";
import SingleItem from "./SingleItem";
import ItemCard2 from "../mainLayout/items/itemsCard2";
// import ItemCard2 from "./itemsCard2";

function ItemList({ items }) {
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())

  //     .then((data) => {
  //       console.log(data);
  //       setItems(serialData(data));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  // const serialData = (data) => {
  //   return data.map((el) => {
  //     return {
  //       img: el.image,
  //       title: el.title,
  //       price: el.price,
  //       desc: el.description,
  //     };
  //   });
  // };

  return (
    <Grid item md={8} sm={9}>
      <Grid container>
        <SingleRow />
        <Grid container style={{ marginTop: "2rem" }}>
          {/* <ItemCard2 items={items} />  */}
          <ItemCard items={items} />
        </Grid>
        <SingleRow />
      </Grid>
    </Grid>
  );
}

export default ItemList;
