import styled from "styled-components"

export const Container = styled.main`
  margin: 48px auto;
  width: 1200px;
  max-width: 90%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
export const ImageContainer = styled.div`
  background-color: ${({ bg }) => bg};
  padding: 20px;
  width: 100%;
  img {
    width: 100%;
    height: ${({ h }) => h};
    object-fit: cover;
    border-radius: 6px;
  }
`

export const ContentArea = styled.div`
  text-align: center;
  background-color: ${({ bg }) => bg};
  padding: ${({ p }) => p};
  hr {
    border: 1px solid #c4c4c4;
    margin: 20px 40px;
  }
`

export const ActionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  user-select: none;

  .heart {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.red};
    fill: none;
    stroke-width: 50px;
    transition: transform 100ms ease-in-out;
    &.active {
      fill: ${({ theme }) => theme.colors.red};
    }
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`
export const Category = styled.div`
  margin: 20px 10px;

  span {
    margin: 0px 10px;
    opacity: 0.7;
  }
`
