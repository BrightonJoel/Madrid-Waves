import styled from "styled-components"

export const Main = styled.div`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  img {
    width: 40%;
    height: ${({ h }) => h};
    object-fit: cover;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 60%;
    }
  }
`
