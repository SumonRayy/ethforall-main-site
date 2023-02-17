import { useEffect, useState } from "react";
import styled from "styled-components";

import TopNav from "../views/verify/topnav.section";
import FirstVerifier from "../views/verify/first.verify";
import SecondVerifier from "../views/verify/second.verify";
import ThirdVerifier from "../views/verify/third.verify";

import { ITopNavProps } from "../interfaces/verify.interfaces";

function Verify() {
  const [currentStep, setCurrentStep] = useState(1);
  const [step, setStep] = useState({
    1: true,
    2: false,
    3: false,
  });

  const topNavProps: ITopNavProps = {
    step,
  };

  useEffect(() => {}, []);

  return (
    <VerifyContainer>
      <TopNav {...topNavProps} />
      {
        {
          1: <FirstVerifier />,
          2: <SecondVerifier />,
          3: <ThirdVerifier />,
        }[currentStep]
      }
    </VerifyContainer>
  );
}

export default Verify;

const VerifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
