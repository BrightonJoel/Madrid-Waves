import styled from "styled-components"

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg};
  border-radius: 12px;
  color: ${({ clr }) => clr};
  margin: 30px 0px;
  width: ${({ w }) => w};
  font-size: 24px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
