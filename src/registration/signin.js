import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { CreateContext } from "../store/IsMainContext";

import SigninForm from "./signinForm";

export default function Signin() {
  const context = useContext(CreateContext);
  context.data.isMain = false;
  context.data.isRegistered = true;
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
