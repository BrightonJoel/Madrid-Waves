import styled from "styled-components"

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  height: 120px;

  h1 {
    color: ${({ theme }) => theme.colors.neutral};
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
