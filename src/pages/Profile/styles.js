import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_PINK};

    display: flex;
    align-items: center;
    padding: 0 14.4rem;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div:nth-child(4) {
    margin-top: 1.6rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.4rem;
    right: 1rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
    }
  }
`;
