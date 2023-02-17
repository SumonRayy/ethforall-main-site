import styled from "styled-components";

export const StyledSelectContainer = styled.div``;

export const StyledSelectLabel = styled.label``;

export const StyledSelect = styled.select`
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.black03};
  color: ${({ theme }) => theme.colors.background.white03};

  font-size: 1.2rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  &:focus {
    outline: none;
  }

  &::-ms-expand {
    background-color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.background.white03};
  }

  option {
    text-align: left;
    background: ${({ theme }) => theme.colors.background.black03};
    border: none;
  }
`;

export const StyledSelectError = styled.span``;
