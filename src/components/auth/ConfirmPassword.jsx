import React from "react";

export default function ConfirmPassword() {
  return (
    <FormContainer>
      <Container>
        <form className="bg-second rounded p-6 w-96 space-y-6 ">
          <Title>Please Enter your password</Title>
          <FormInput
            label="New password"
            placeholder="********"
            name="password"
            type="password"
          />
          <FormInput
            label="Confirm password password"
            placeholder="********"
            name="confirm password"
            type="password"
          />

          <Submit value="Confirm password" />
        </form>
      </Container>
    </FormContainer>
  );
}
