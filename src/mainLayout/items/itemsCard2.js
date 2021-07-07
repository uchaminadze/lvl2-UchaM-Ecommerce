import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";

function ItemCard2({ items }) {
  return (
    <>
      {items.map((el) => {
        return (
          <Grid item md={12} sm={12} xs={12}>
            <Card
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <Link href="#">
                <Grid container alignItems="center">
                  <Grid item xs={12} md={4}>
                    <CardMedia
                      image={el.img}
                      style={{
                        height: "200px",
                        minWidth: "100px",
                        backgroundSize: 100,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "black" }}
                      >
                        {el.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {el.desc} $
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {el.price} $
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Link>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default ItemCard2;
