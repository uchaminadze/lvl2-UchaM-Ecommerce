import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Typography } from "@material-ui/core";
import UseStyles from "../sidebarClasses";

function Condition() {
  const classes = UseStyles();
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
    <List className={classes.checkbox}>
      <Typography variant="h6">Condition</Typography>
      {["New", "Used", "Collectible", "Renewed"].map((value) => {
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
                size="small"
              />
              <Typography>
                <Link
                  href="#"
                  onClick={preventDefault}
                  color="inherit"
                  underline="none"
                >
                  {value}
                </Link>
              </Typography>
            </ListItemIcon>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Condition;
