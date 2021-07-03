import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Checkbox, Link, Typography } from "@material-ui/core";
import CollapseSize from "./collapseSize";

function MainSize() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      <Typography variant="h5">Size</Typography>
      {["34", "36", "38", "40"].map((value) => {
        const preventDefault = (event) => event.preventDefault();
        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            style={{ padding: "0px 0px 0px 2px" }}
            onClick={handleToggle(value)}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <Typography>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  onClick={preventDefault}
                >
                  {value}
                </Link>
              </Typography>
            </ListItemIcon>
          </ListItem>
        );
      })}

      <CollapseSize />
    </List>
  );
}

export default MainSize;
