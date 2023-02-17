import React from "react";
import styled from "styled-components";
import { IStepNumber, ITopNavProps } from "../../interfaces/verify.interfaces";

function TopNav(props: ITopNavProps) {
  return (
    <TopNavStyles>
      {Object.keys(props.step).map((key) => {
        return (
          <Step key={key}>
            <StepNumber completed={props.step[parseInt(key)]}>{key}</StepNumber>
          </Step>
        );
      })}
    </TopNavStyles>
  );
}

export default TopNav;

const TopNavStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 80%;
  padding: 1rem 2rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 0 0 3rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* width: 2rem;
  height: 2rem; */

  padding: 1rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: ${({ theme }) => theme.colors.background.whiteDark};
`;

const StepNumber = styled.div<IStepNumber>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: 600;
  width: 5rem;
  height: 5rem;

  margin: 0;
  padding: 0;

  ${({ completed, theme }) => {
    if (completed) {
      return `        
        color: ${theme.colors.background.white};
        text-shadow: 0 0 0.5rem ${theme.colors.background.white};
      `;
    } else {
      return `
        color: ${theme.colors.background.whiteDarker};
      `;
    }
  }}
`;
