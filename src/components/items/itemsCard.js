import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link as MLINK,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";
import { HOME_PAGE, SINGLE_ITEM } from "../../routes";
import Api from "../../api";
import { setProd } from "../../store/products/prodActCrt";
import { useDispatch, useSelector } from "react-redux";
import { selectProd } from "../../store/products/prodSelector";

function ItemCard() {
  const products = useSelector(selectProd);

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
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default ItemCard;
