import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { Box, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SingleItemLeft from "./singleItemLeft";
import { useParams } from "react-router-dom";
import SingleItemRight from "./singleItemRight";
import Details from "./details/details";
function SingleItem({ items }) {
  const { price, title, img } = useParams();
  return (
    <Container maxWidth="lg" component="main">
      <Grid container>
        {items ? (
          <Grid container spacing={3} justify="center">
            <Grid item md={6} xs={12}>
              <SingleItemLeft items={items} img={img} />
            </Grid>
            <Grid item md={6} xs={12}>
              <SingleItemRight price={price} title={title} />
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
      <Grid container>
        <Grid container item md={12} xs={12} style={{ margin: "50px 0" }}>
          <Details price={price} title={title} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SingleItem;
