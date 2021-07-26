import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { loadCSS } from "fg-loadcss";
import UseStyles from "../headerClasses";
import MainNav from "./mainNav";
import CollapseNav from "./collapseNav";
import { CreateContext } from "../../store/IsMainContext";

function Nav() {
  const classes = UseStyles();
  const [open, setOpen] = React.useState(false);
  const [navBackground, setNavBackground] = useState(classes.main);
  const [navButton, setNavButton] = useState(classes.signup);
  const [navLinks, setNavLinks] = useState(classes.navlinks);
  const navRef = React.useRef();
  navRef.current = navBackground;
  const context = useContext(CreateContext);

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
      if (window.scrollY > 66) {
        setNavBackground(classes.main2);
        setNavButton(classes.signup2);
        setNavLinks(classes.navlinks2);
      } else {
        setNavBackground(classes.main);
        setNavButton(classes.signup);
        setNavLinks(classes.navlinks);
      }
    }
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (context.data.isMain === false) {
      setNavBackground(classes.main2);
      setNavButton(classes.signup2);
      setNavLinks(classes.navlinks2);
    }
    if (window.scrollY > 66) {
      setNavBackground(classes.main2);
      setNavButton(classes.signup2);
      setNavLinks(classes.navlinks2);
    }
    if (context.data.userToken === true) {
      setNavBackground(classes.main);
      setNavButton(classes.signup);
      setNavLinks(classes.navlinks);
    }
  });
  const handleClick = () => {
    setOpen(!open);
  };
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
    <div className={classes.grow}>
      <AppBar position="fixed" className={navBackground}>
        <MainNav
          navButton={navButton}
          navLinks={navLinks}
          handleClick={handleClick}
        />
        <CollapseNav open={open} />
      </AppBar>
    </div>
  );
}

export default Nav;
