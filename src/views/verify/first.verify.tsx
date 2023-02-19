import React, { ChangeEvent, FormEvent } from "react";

import axios from "axios";

import { FormContainer, StyledForm } from "../../components/forms/forms.styled";
import { StyledButton } from "../../components/buttons/buttons.styled";
import {
  StyledInputText,
} from "../../components/input/inputs.styled";
import { StyledSelect } from "../../components/input/select.styled";
import { IStepInterface } from "../../interfaces/verify.interfaces";

function FirstVerifier({ setVerifyStep }: IStepInterface) {
  const [selected, setSelected] = React.useState("0");
  const [value, setValue] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [clientID, setClientID] = React.useState("");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  const handleFirstSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(selected, value);
    if (selected === "2") {
      const response = await axios.post(
        "https://sandbox.surepass.io/api/v1/pan/pan",
        { id_number: value },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUREPASS_API_TOKEN}`,
          },
        }
      );
      if (response.data?.success && response.data?.data.category === "person")
        setVerifyStep(2);
    }
    if (selected === "1") {
      setStep(1)
      // const response = await axios.post(
      //   "https://sandbox.surepass.io/api/v1/aadhaar-v2/generate-otp",
      //   { id_number: value },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //       Authorization: `Bearer ${import.meta.env.VITE_SUREPASS_API_TOKEN}`,
      //     },
      //   }
      // );
    }
  };

  const handleSecondSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("OTP Entered", value);
    setVerifyStep(2);
  };
  return (
    <FormContainer>
      <h1>Verify</h1>
      {step === 0 && (
        <>
          <StyledForm onSubmit={handleFirstSubmit}>
            <StyledSelect onChange={handleSelect} value={selected}>
              <option value="0">Select</option>
              <option value="1">Aadhaar</option>
              <option value="2">PAN</option>
            </StyledSelect>
            <StyledInputText
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
              type="text"
              disabled={selected === "0"}
              placeholder={
                selected === "0"
                  ? `Select an Option`
                  : selected === "1"
                  ? `Enter your AADHAR number`
                  : `Enter PAN`
              }
            />
            {/* need attention */}
            {/* <Checkbox checked={checked} /> */}
            {/*  */}
            <StyledButton type="submit" primary={true}>
              <span>Next</span>
            </StyledButton>
          </StyledForm>
        </>
      )}
      {step === 1 && (
        <>
          <StyledForm onSubmit={handleSecondSubmit}>
            <StyledInputText
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
              placeholder="Please Enter the OTP Sent to your mobile"
            />
            <StyledButton type="submit" primary={true}>
              <span>Submit</span>
            </StyledButton>
          </StyledForm>
        </>
      )}
    </FormContainer>
  );
}

export default FirstVerifier;
