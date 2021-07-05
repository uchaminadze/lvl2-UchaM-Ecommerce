import React from "react";
import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";
import { Box } from "@material-ui/core";
import UseStyles from "./singlerowClasses";

function GridLayout() {
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
    <Box className={classes.secondary}>
      <Icon className="fas fa-th-list" />
      <Icon className="fas fa-th-large" />
    </Box>
  );
}

export default GridLayout;
