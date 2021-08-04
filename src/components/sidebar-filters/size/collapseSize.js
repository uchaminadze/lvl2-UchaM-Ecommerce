import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import React from "react";
import { Checkbox, Link, Typography } from "@material-ui/core";

function CollapseSize() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
    <>
      <Typography>
        <Link
          style={{ cursor: "pointer", color: "inherit" }}
          underline="hover"
          onClick={handleClick}
        >
          more
        </Link>
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {["42", "44", "46", "48"].map((value) => {
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
      </Collapse>
    </>
  );
}

export default CollapseSize;
