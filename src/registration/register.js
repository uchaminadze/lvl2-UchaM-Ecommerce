import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../footer/footer";
import RegisterHeader from "./header/registerHeader";
import RegisterForm from "./registerForm";

export default function Register() {
  return (
    <>
      <RegisterHeader />
      <Container maxWidth="sm">
        <RegisterForm />
      </Container>
      <Footer />
    </>
  );
}
