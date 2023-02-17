import React from "react";
import styled from "styled-components";

import { FormContainer, StyledForm } from "../../components/forms/forms.styled";
import { StyledButton } from "../../components/buttons/buttons.styled";
import {
  StyledInputText,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "../../components/input/inputs.styled";
import { StyledSelect } from "../../components/input/select.styled";

function FirstVerifier() {
  const [checked, setChecked] = React.useState(false);

  // const Checkbox = ({ className, checked, ...props }) => {
  //   return (
  //     <CheckboxContainer className={className}>
  //       <HiddenCheckbox checked={checked} {...props} />
  //       <StyledCheckbox checked={checked}>
  //         <Icon viewBox="0 0 24 24">
  //           <polyline points="20 6 9 17 4 12" />
  //         </Icon>
  //       </StyledCheckbox>
  //     </CheckboxContainer>
  //   );
  // };

  return (
    <FormContainer>
      <StyledForm action="" method="post">
        <h1>Verify</h1>
        <StyledSelect>
          <option value="0">Select</option>
          <option value="1">Aadhaar</option>
          <option value="2">PAN</option>
        </StyledSelect>
        <StyledInputText type="text" placeholder="Enter Anything" />
        {/* need attention */}
        {/* <Checkbox checked={checked} /> */}
        {/*  */}
        <StyledButton type="submit" primary={true}>
          <span>Next</span>
        </StyledButton>
      </StyledForm>
    </FormContainer>
  );
}

export default FirstVerifier;
