import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6.4rem;
  padding: 3rem 12.3rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    align-items: flex-end;
    min-width: 10rem;
    max-width: 20rem;
  }

  strong {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    align-self: flex-end;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
