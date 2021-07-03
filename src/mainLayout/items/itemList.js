import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
      <Grid container spacing={1}>
        <Grid container spacing={2}>
          <ItemCard items={items} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ItemList;
