import styled from "styled-components"

export const SearchResultContainer = styled.div`
  position: absolute;
  z-index: 99;
  top: 80px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 20px;
  width: 100%;
  border-radius: 6px;

  li {
    margin-top: 10px;
    list-style: none;
    border-radius: 6px;
    padding: 20px 10px;
    background-color: ${({ theme }) => theme.colors.neutral};
  }
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
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

export const SearchResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .close {
    font-size: 20px;

    &:hover {
      font-size: 22px;
      cursor: pointer;
    }
  }
`
