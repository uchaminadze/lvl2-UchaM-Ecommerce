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
import { useSelector } from "react-redux";
import LeftSide from "../../components/cart/leftSide";
import RightSide from "../../components/cart/rightSide";
import CartLayout from "../../layout/cartLayout/cartLayout";
import { selectProdCart } from "../../store/products/prodSelector";

function Cart() {
  const prodCart = useSelector(selectProdCart);
  console.log(prodCart.length);
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
