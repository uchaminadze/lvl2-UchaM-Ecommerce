import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { CreateContext } from "../store/context";

import SigninForm from "./signinForm";

export default function Signin() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <SigninForm />
      </Container>
      <Footer />
    </>
  );
}
