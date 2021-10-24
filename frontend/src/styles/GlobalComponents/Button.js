import styled from "styled-components"

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg};
  border-radius: 6px;
  color: ${({ clr }) => clr};
  margin: ${({ mt }) => mt} 0px;
  width: ${({ w }) => w};
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: 100ms;

  &:hover {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
