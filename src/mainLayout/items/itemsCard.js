import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link as MLINK,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

function ItemCard({ items }) {
  const preventDefault = (event) => event.preventDefault();
  return (
    <>
      {items.map((el) => {
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
              <MLINK component={Link} to={`/product/${el.price}/${el.title}`}>
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
