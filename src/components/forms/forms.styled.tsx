import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 80%;
  height: 80%;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.background.white03};
  }
`;
