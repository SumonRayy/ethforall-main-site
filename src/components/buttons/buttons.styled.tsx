import styled from "styled-components";
import { IButtonProps } from "../../interfaces/styles.interfaces";

export const ButtonContainerRow = styled.div``;

export const ButtonContainerColumn = styled.div``;

export const StyledButton = styled.button<IButtonProps>`
  ${({ theme, primary, secondary, tertiary }) => {
    if (primary) {
      return `
        background: ${theme.colors.background.white02};
        `;
    }
    if (secondary) {
      return `
            background: ${theme.colors.background.white02};
            `;
    }
    if (tertiary) {
      return `
            background: ${theme.colors.background.white02};
            `;
    }
  }}
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  margin: 2rem;
  padding: 0.5rem 5rem;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.background.white};
  font-size: 1.5rem;
  cursor: pointer;

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);

  &:focus {
    outline: none;
  }

  width: ${({ width }) => width || "100px"};
`;
