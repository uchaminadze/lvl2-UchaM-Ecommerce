import { Paper, TextField } from "@material-ui/core";
import {
  Table,
  Box,
  Container,
  Grid,
  TableBody,
  TableContainer,
  Typography,
  Button,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSide from "../../components/cart/leftSide";
import RightSide from "../../components/cart/rightSide";
import CartLayout from "../../layout/cartLayout/cartLayout";
import { selectProdCart } from "../../store/productsCart/cartSelector";
import { setProdCart } from "../../store/productsCart/cartActCrt";

function Cart() {
  const dispatch = useDispatch();
  let cart = useSelector(selectProdCart);
  // useEffect(() => {
  //   let docCookie = document.cookie;
  //   let parsedCookie = JSON.parse(docCookie);
  //   console.log(parsedCookie);
  //   console.log(cart);
  //   dispatch(setProdCart(parsedCookie));
  // }, []);
  return (
    <CartLayout>
      <Container maxWidth="lg" component="main">
        <Grid container spacing={3} justify="center">
          <Grid item lg={8} md={8} sm={10} xs={12}>
            <LeftSide />
          </Grid>
          <Grid item lg={4} md={8} sm={10} xs={12}>
            <RightSide />
          </Grid>
        </Grid>
      </Container>
    </CartLayout>
  );
}

export default Cart;
