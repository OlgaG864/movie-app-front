import { useState, useEffect, useRef } from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";
import FormContainer from "../form/FormContainer";

const OTP_LENGTH = 6;

export default function EmailVerification() {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const input = useRef();

  const focusNextinputField = (index) => {
    setActiveOtpIndex(index + 1);
  };

  const focusPreviousInputField = (index) => {
    let nextIndex;
    const deff = index - 1;
    nextIndex = deff !== 0 ? deff : 0;
    setActiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);
    if (!value) focusPreviousInputField();
    else focusNextinputField(index);
    setOtp([...newOtp]);
  };
  const handleKeyDown = ({ key }, index) => {
    if (key === "Backspace") {
      focusPreviousInputField(index);
    }
  };

  useEffect(() => {
    input.current?.focus();
  }, [activeOtpIndex]);
  return (
    <FormContainer>
      <Container>
        <form className="bg-second rounded p-6  space-y-6 ">
          <div>
            <Title>Please Enter the OTP to verify your account</Title>
            <p className="text-center text-dark-subtle">
              OTP has been send to your email
            </p>
          </div>
          <div className="flex  items-center justify-between">
            {otp.map((_, index) => {
              return (
                <input
                  ref={activeOtpIndex === index ? input : null}
                  key={index}
                  type="number"
                  value={otp[index] || ""}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className=" spin-button-none w-12 h-12 border-2 rounded border-dark-subtle focus:border-white bg-transparent outline-none text-center text-white font-semibold text-xl"
                />
              );
            })}
          </div>

          <Submit value="Send link" />
        </form>
      </Container>
    </FormContainer>
  );
}
