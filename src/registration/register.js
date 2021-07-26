import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { CreateContext } from "../store/IsMainContext";

import RegisterForm from "./registerForm";

export default function Register() {
  const context = useContext(CreateContext);
  context.data.isMain = false;
  context.data.isRegistered = false;

  console.log(context.data);
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
