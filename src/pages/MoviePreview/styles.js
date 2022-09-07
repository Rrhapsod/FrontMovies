import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 4rem 0;
  }
`;

export const Content = styled.div`
  max-width: 50rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
  }

  > section {
    margin-top: 4rem;
    display: flex;
    gap: 0.8rem;
  }

  > p {
    margin-top: 4rem;
    text-align: justify;
  }
`;

export const Title = styled.div`
  display: flex;
  margin-top: 2.4rem;
  gap: 2rem;

  > h1 {
    font-size: 3.6rem;
  }

  > span {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 3.6rem;
    padding: 0 1rem;
    border-radius: 10px;
  }
`;

export const Stamps = styled.div`
  display: flex;
  margin-top: 2.4rem;
  gap: 1.5rem;
`;
