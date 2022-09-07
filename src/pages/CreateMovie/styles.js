import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  margin: 4rem 12.3rem 4rem;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  > h1 {
    font-size: 36px;
    margin-top: 2.4rem;
  }

  h3 {
    margin-top: 4rem;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
  }

  > section {
    margin-top: 4rem;
    display: flex;
    gap: 4rem;

    button:nth-child(1) {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKER};
      color: ${({ theme }) => theme.COLORS.PINK};
      height: 5.6rem;
      border: 0;
      padding: 0 1.6rem;
      border-radius: 10px;
      font-weight: 500;
      font-size: 1.6rem;
    }

    button:nth-child(2) {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKER};
      height: 5.6rem;
      border: 0;
      padding: 0 1.6rem;
      border-radius: 10px;
      font-weight: 500;
      font-size: 1.6rem;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 27.4rem;
  margin-top: 4rem;
  padding: 1.6rem;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;
  outline: none;
  font-size: 1.6rem;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
  }
`;

export const TagArea = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 2.4rem;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKER};
  padding: 1.6rem;
  border-radius: 8px;
`;
