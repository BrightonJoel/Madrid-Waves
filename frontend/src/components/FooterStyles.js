import styled from "styled-components"

export const Footerdiv = styled.footer`
    display: grid;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    height: 100px;
    grid-template-columns: 33% 33% 33%;

  ` 
  export const Item1 = styled.div`
  grid-column: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;        /* for single line flex container */
  align-content: center;      /* for multi-line flex container */
  color: ${({theme}) => theme.colors.neutral};
  font-size: 20px;
  padding:10px;

  @media (max-width: 800px){
    grid-column: 1 / 4;
  }
`