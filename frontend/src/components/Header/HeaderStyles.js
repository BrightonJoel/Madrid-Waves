import styled from "styled-components"

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  height: 15vh;

  h1 {
    color: ${({ theme }) => theme.colors.neutral};
  }

  @media (max-width: 768px) {
    h1 {
      display: none;
    }
  }
`
