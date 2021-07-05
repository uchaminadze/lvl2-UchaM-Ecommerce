import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PagePagintaion from "../singlerow/pagintaion";
import SingleRow from "../singlerow/singleRow";
import ItemCard from "./itemCard";

function ItemList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setItems(serialData(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const serialData = (data) => {
    return data.map((el) => {
      return {
        img: el.image,
        title: el.title,
        price: el.price,
      };
    });
  };

  return (
    <Grid item md={8} sm={9}>
      <Grid container>
        <SingleRow />
        <Grid container style={{ marginTop: "2rem" }}>
          <ItemCard items={items} />
        </Grid>
        <SingleRow />
      </Grid>
    </Grid>
  );
}

export default ItemList;
