import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button, Grid } from "@material-ui/core";
import React from "react";
import { setCart, setCounter } from "../../store/products/prodActCrt";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectCounter } from "../../store/products/prodSelector";

function Buttons() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const cart = useSelector(selectCart);
  const cartBtn = () => {
    dispatch(setCounter(0));
    dispatch(setCart(counter + cart));
  };
  return (
    <Grid container md={12}>
      <Grid item md={3}>
        <Button variant="contained" color="primary">
          BUY NOW
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" onClick={cartBtn}>
          <ShoppingCartIcon style={{ fontSize: "15px" }} /> ADD TO CART
        </Button>
      </Grid>
    </Grid>
  );
}

export default Buttons;
