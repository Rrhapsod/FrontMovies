import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem;
  border-radius: 8px;
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_LIGHT};

  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_TEXT : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `3px dashed ${theme.COLORS.GRAY_TEXT}` : "none"};

  > input {
    background: none;
    border: none;
    outline: none;
    font-size: 1.6rem;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.GRAY_TEXT : theme.COLORS.WHITE};
  }

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
