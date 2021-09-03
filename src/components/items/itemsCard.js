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
import { setProdCart } from "../../store/productsCart/cartActCrt";
import { useDispatch, useSelector } from "react-redux";

import { selectProd } from "../../store/products/prodSelector";
import { selectProdCart } from "../../store/productsCart/cartSelector";
import { selectLoggedIn } from "../../store/user/userSelector";
import AddButton from "../addItemButton/button";

function ItemCard() {
  const products = useSelector(selectProd);
  const loggedIn = useSelector(selectLoggedIn);

  const dispatch = useDispatch();
  let cart = useSelector(selectProdCart);

  // useEffect(() => {
  //   dispatch(setProdCart([]));
  // }, []);

  return (
    <>
      {products.map((el, index) => {
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
              }}
              // key={index}
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
                  <AddButton el={el} index={index} />
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
