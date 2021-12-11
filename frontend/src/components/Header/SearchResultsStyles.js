import styled from "styled-components"

export const SearchResultContainer = styled.div`
  position: absolute;
  z-index: 99;
  top: 80px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  width: 100%;
  border-radius: 6px;
  animation: 100ms ease-in-out fadeIn 1;

  li {
    margin-top: 10px;
    list-style: none;
    border-radius: 6px;
    padding: 20px 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 200ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: rgb(0 0 0 / 6%);
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-top: 10px;
    opacity: 0.7;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
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
