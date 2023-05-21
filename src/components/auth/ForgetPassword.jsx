import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";
import FormContainer from "../form/FormContainer";

export default function ForgetPassword() {
  return (
    <FormContainer>
      <Container>
        <form className="bg-second rounded p-6 w-96 space-y-6 ">
          <Title>Please Enter Your Email</Title>
          <FormInput label="Email" placeholder="john@email.com" name="email" />
          <Submit value="Send Link" />

          <div className="flex justify-between">
            <CustomLink to="/auth/signin">Sign in</CustomLink>
            <CustomLink to="/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
}
