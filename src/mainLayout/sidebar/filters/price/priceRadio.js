import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";

function PriceRadio() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" style={{ width: "100%" }}>
      <Typography variant="h6">Price</Typography>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="UNDER 25$" />
        <FormControlLabel value="2" control={<Radio />} label="25$ TO 50$" />
        <FormControlLabel value="3" control={<Radio />} label="50$ TO 100$" />
        <FormControlLabel value="4" control={<Radio />} label="100$ TO 200$" />
        <FormControlLabel value="5" control={<Radio />} label="200$ & ABOVE" />
      </RadioGroup>
    </FormControl>
  );
}

export default PriceRadio;
