import styled from "styled-components"

export const ErrorContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  img {
    width: 30%;
    height: ${({ h }) => h};
    object-fit: cover;
    border-radius: 6px;
  }
`
