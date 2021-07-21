import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../footer/footer";
import SigninHeader from "./header/header";
import SigninForm from "./signinForm";

export default function Signin() {
  return (
    <>
      <SigninHeader />
      <Container maxWidth="sm">
        <SigninForm />
      </Container>
      <Footer />
    </>
  );
}
