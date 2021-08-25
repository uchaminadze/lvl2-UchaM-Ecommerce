import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link as MLINK,
  Button,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";
import { HOME_PAGE, SINGLE_ITEM } from "../../routes";
import Api from "../../api";
import { setProd, setProdCart } from "../../store/products/prodActCrt";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { selectProd, selectProdCart } from "../../store/products/prodSelector";
import { selectLoggedIn } from "../../store/user/userSelector";

function ItemCard() {
  const products = useSelector(selectProd);
  const loggedIn = useSelector(selectLoggedIn);
  const prodCart = useSelector(selectProdCart);
  const dispatch = useDispatch();
  let cookieItem;
  const cookieclick = (el) => {
    console.log(el);
    cookieItem = JSON.stringify(el);
    document.cookie = cookieItem;
    dispatch(setProdCart([JSON.parse(cookieItem)]));
    console.log(prodCart.length);
  };

  // useEffect(() => {
  //   if (cookieItem) {
  //     console.log(cookieItem);
  //     dispatch(setProdCart([JSON.parse(cookieItem)]));
  //   }
  // }, []);

  return (
    <>
      {products.map((el) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            style={{
              textAlign: "center",
            }}
          >
            <Card
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
                // width: 200,
              }}
            >
              <MLINK component={Link} to={`${SINGLE_ITEM}/${el.id}/`}>
                <CardMedia
                  image={el.img}
                  style={{
                    height: "300px",
                    width: "100%",
                    backgroundSize: 200,
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle1" style={{ color: "black" }}>
                    {el.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {el.price} $
                  </Typography>
                </CardContent>
              </MLINK>
              {loggedIn && (
                <Box style={{ height: 50 }}>
                  <Button variant="contained" onClick={() => cookieclick(el)}>
                    <ShoppingCartIcon style={{ fontSize: "13px" }} /> ADD TO
                    CART
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default ItemCard;
