import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";

function Size() {
  const [value, setValue] = React.useState("small");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Typography variant="body1">Size</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          style={{ flexDirection: "row" }}
        >
          <FormControlLabel
            value="small"
            control={<Radio color="primary" size="small" />}
            label="Small"
          />
          <FormControlLabel
            value="medium"
            control={<Radio color="primary" size="small" />}
            label="Medium"
          />
          <FormControlLabel
            value="large"
            control={<Radio color="primary" size="small" />}
            label="Large"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Size;
