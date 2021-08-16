import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import UserLayout from "../../layout/userLayout/userLayout";
import UserUpdateForm from "./userUpdateForm";

export default function UserUpdate() {
  return (
    <UserLayout>
      <Container maxWidth="sm">
        <UserUpdateForm />
      </Container>
    </UserLayout>
  );
}
