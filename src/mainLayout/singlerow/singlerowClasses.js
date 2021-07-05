import { makeStyles } from "@material-ui/core";

const UseStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },

  secondary: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
}));

export default UseStyles;
