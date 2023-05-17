import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";
export default function Signin() {
  return (
    <div className="fixed inset-0 bg-main -z-20 flex justify-center items-center">
      <Container>
        <form className="bg-second rounded p-6 w-72 space-y-6 ">
          <Title>Sign in</Title>
          <FormInput label="Email" placeholder="john@gmail.com" name="email" />
          <FormInput label="Password" placeholder="******" name="password" />
          <Submit value="Sign in" />
          <div className="flex justify-between">
            <CustomLink to="/forget-password">Forget password</CustomLink>
            <CustomLink to="/signup">Signup</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
