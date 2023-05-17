import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";

export default function ForgetPassword() {
  return (
    <div className="fixed inset-0 bg-main -z-20 flex justify-center items-center">
      <Container>
        <form className="bg-second rounded p-6 w-96 space-y-6 ">
          <Title>Please Enter your Email</Title>
          <FormInput label="Email" placeholder="john@gmail.com" name="email" />

          <Submit value="Send link" />
          <div className="flex justify-between">
            <CustomLink to="/signin">Sign in</CustomLink>
            <CustomLink to="/signup">Signup</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
