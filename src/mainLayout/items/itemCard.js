import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";

function ItemCard({ items }) {
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
              <Link href="#">
                <CardMedia
                  image={el.img}
                  style={{
                    height: "200px",
                    width: "100%",
                    backgroundSize: 150,
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
              </Link>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default ItemCard;
