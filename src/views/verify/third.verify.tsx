import React from "react";
import styled from "styled-components";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { StyledButton } from "../../components/buttons/buttons.styled";
import { IStepInterface } from "../../interfaces/verify.interfaces";

function ThirdVerifier({ setVerifyStep }: IStepInterface) {
  const [step, setStep] = React.useState(1);
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const handleMint = async () => {
    if(isConnected) {
      
    }
  };
  return (
    <StyledContainer>
      <h2>Mint thy zk-SBT</h2>
      {step === 0 && (
        <>
          <p>Please scan the below QR with Polygon Wallet App</p>
        </>
      )}
      {step === 1 && (
        <>
          <p>and for all that, here's your reward:</p>
          {chain?.network !== "maticum" ? (
            <StyledButton
              primary={true}
              onClick={() =>
                switchNetwork?.(
                  chains.filter((chain) => chain.network === "maticum")[0].id
                )
              }
            >
              Switch to Polygon
            </StyledButton>
          ) : (
            <StyledButton primary={true} onClick={handleMint}>
              Mint
            </StyledButton>
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
