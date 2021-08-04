import React from "react";
import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import UseStyles from "../../../layout/mainlayout/sidebar/sidebarClasses";

function Reviews() {
  const classes = UseStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <List>
      <Typography variant="h6">Avg. Customer Review</Typography>
      {["& UP", "& UP", "& UP", "& UP"].map((value) => {
        const preventDefault = (event) => event.preventDefault();

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            style={{ padding: "0px 0px 0px 2px" }}
            // onClick={handleToggle(value)}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              <Typography>
                <Link
                  href="#"
                  onClick={preventDefault}
                  color="inherit"
                  className={classes.review}
                  underline="none"
                >
                  {[
                    "fas fa-star",
                    "fas fa-star",
                    "fas fa-star",
                    "fas fa-star",
                    "far fa-star",
                  ].map((value, index) => {
                    return <Icon key={index} className={value}></Icon>;
                  })}

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

export default Reviews;
