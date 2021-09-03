import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button, Grid } from "@material-ui/core";
import React from "react";
import { setCart, setCounter } from "../../store/products/prodActCrt";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "../../components/addItemButton/button";
import { selectSingleProd } from "../../store/singleProduct/singleSelector";

function Buttons() {
  let item = useSelector(selectSingleProd);

  return (
    <Grid container md={12}>
      <Grid item md={3}>
        <Button variant="contained" color="primary">
          BUY NOW
        </Button>
      </Grid>
      <Grid item md={6}>
        <AddButton el={item} />
      </Grid>
    </Grid>
  );
}

export default Buttons;
