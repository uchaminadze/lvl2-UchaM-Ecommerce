import { makeStyles } from "@material-ui/core";

const UseStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default UseStyles;
