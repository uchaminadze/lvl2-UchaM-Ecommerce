import { Box, Card, CardMedia, Grid, Link } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSingleProd } from "../../store/singleProduct/singleSelector";
// import { useParams } from "react-router-dom";
function SingleItemLeft() {
  let item = useSelector(selectSingleProd);
  const [image, setImage] = useState(item.img);

  return (
    <>
      <Box>
        <Grid item md={12} sm={12} xs={12}>
          <Card variant="outlined" style={{ width: "100%" }}>
            <CardMedia
              image={image}
              style={{
                height: "400px",
                // width: "100%",
                backgroundSize: 300,
              }}
            />
          </Card>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          {[item.img, item.img, item.img, item.img].map((value) => {
            const mouseEnter = () => {
              setImage(value);
            };
            return (
              <Grid item md={3} sm={3} xs={6}>
                <Card variant="outlined">
                  <Link href="#" onMouseEnter={mouseEnter}>
                    <CardMedia
                      image={value}
                      style={{
                        height: "150px",
                        backgroundSize: 100,
                      }}
                    />
                  </Link>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default SingleItemLeft;
