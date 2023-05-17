import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";

export default function Signup() {
  return (
    <div className="fixed inset-0 bg-main -z-20 flex justify-center items-center">
      <Container>
        <form className="bg-second rounded p-6 w-72 space-y-6 ">
          <Title>Sign up</Title>
          <FormInput label="Name" placeholder="John Doe" name="name" />
          <FormInput label="Email" placeholder="john@gmail.com" name="email" />
          <FormInput label="Password" placeholder="******" name="password" />
          <Submit value="Sign up" />
          <div className="flex justify-between">
            <CustomLink to="/forget-password">Forget password</CustomLink>
            <CustomLink to="auth/signin">Signin</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
