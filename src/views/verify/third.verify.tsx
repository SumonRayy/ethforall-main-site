import React from "react";
import styled from "styled-components";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { StyledButton } from "../../components/buttons/buttons.styled";
import { IStepInterface } from "../../interfaces/verify.interfaces";

import popCode from "../../assets/qr/pop.json";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

function ThirdVerifier({ setVerifyStep }: IStepInterface) {
  const [step, setStep] = React.useState(0);
  const { chain } = useNetwork();
  const { chains, switchNetwork } =
    useSwitchNetwork();
  const navigate = useNavigate();

  const handlePolygonId = () => {
    window.open('https://platform-test.polygonid.com/claim-link/e63424f7-d4c4-4393-a247-410e9cd9f813','_blank');
    setStep(1);
  }

  console.log("QR", popCode, chains);
  return (
    <StyledContainer>
      <h2>Mint thy zk-SBT</h2>
      {step === 0 && (
        <>
          <p>Please go to the link below and scan the QR with Polygon ID App</p>
          <StyledButton primary={true} onClick={handlePolygonId}>Go</StyledButton>
        </>
      )}
      {step === 1 && (
        <>
          <p>and for all that, here's your reward (scan with Polygon ID App after you have received your claim):</p>
          {chain?.network !== "maticmum" ? (
            <StyledButton
              primary={true}
              onClick={() =>
                switchNetwork?.(
                  chains.filter((chain) => chain.network === "maticmum")[0].id
                )
              }
            >
              Switch to Polygon
            </StyledButton>
          ) : (
            <>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "50%", margin: '15px 0px' }}
              value={JSON.stringify(popCode)}
              viewBox={`0 0 256 256`}
            />
            <StyledButton primary={true} onClick={() => navigate('/dashboard/home')}>Go to Dashboard</StyledButton>
</>
          )}
        </>
      )}
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 25px;
  margin-top: 25px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.background.white04};
  }
  p {
    margin: 5px 0px;
    color: ${({ theme }) => theme.colors.background.white03};
  }
`;
export default ThirdVerifier;
