import styled from "styled-components"

export const MainDiv = styled.div`
    display: grid;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    height: 20vh;
    grid-template-columns: auto auto auto;
`
export const Item1 = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    height: 30px;
    
    grid-column: 1 / 1;
`
export const Item2 = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    height: 30px;
    grid-column: 2 / 2;
`
export const Item3 = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    height: 30px;
    grid-column: 3 / 3;
`