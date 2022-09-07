import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
  padding: 3.2rem 3.2rem;
  border-radius: 16px;
  width: 100%;

  > p {
    margin: 1.5rem 0;
  }

  > footer {
    display: flex;
    gap: 0.8rem;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 2rem;

  > h1 {
    font-size: 2.4rem;
  }

  > span {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    padding: 0 0.8rem;
    border-radius: 10px;
  }
`;
