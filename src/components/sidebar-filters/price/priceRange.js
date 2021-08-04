import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Box } from "@material-ui/core";
import UseStyles from "../../../layout/mainlayout/sidebar/sidebarClasses";

function valuetext(value) {
  return `${value} $`;
}

function PriceRange() {
  const classes = UseStyles();
  const [value, setValue] = React.useState([0, 70]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.priceRange}>
      <Typography variant="h6" id="range-slider" gutterBottom>
        Price Range
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        className={classes.rangeSlider}
      />
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="p">0$</Typography>
        <Typography variant="p">100$</Typography>
      </Box>
    </Box>
  );
}

export default PriceRange;
