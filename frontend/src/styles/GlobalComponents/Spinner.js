import styled from "styled-components"

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  img {
    height: 132px;
    width: 132px;
    animation: spinner 0.9s linear infinite;
  }

  .loader {
    color: ${({ theme }) => theme.colors.yellow};
    height: 100px;
    width: 100px;
    animation: spinner 0.9s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`
