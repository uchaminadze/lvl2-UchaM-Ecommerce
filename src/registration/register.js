import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { CreateContext } from "../store/context";

import RegisterForm from "./registerForm";

export default function Register() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <RegisterForm />
      </Container>
      <Footer />
    </>
  );
}
