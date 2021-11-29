import styled from "styled-components"

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: ${({ theme }) => theme.colors.primaryBlue};
  background: rgb(0, 71, 151);
  background: radial-gradient(
    circle,
    rgba(0, 71, 151, 1) 0%,
    rgba(0, 71, 151, 1) 48%,
    rgba(0, 23, 151, 1) 100%
  );
  height: 150px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    height: 132px;
    width: 132px;
  }

  @media (max-width: 768px) {
    h1 {
      display: none;
    }

    img {
      height: 105px;
      width: 105px;
    }
  }
`
