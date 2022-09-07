import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  > svg {
    color: ${({theme}) => theme.COLORS.PINK}
  }

  > p {
    margin-left: 0.8rem;
  }
`;
