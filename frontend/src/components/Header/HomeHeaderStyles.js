import styled from "styled-components"

export const MainDiv = styled.header`
    display: grid;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    height: 250px;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto, auto
`
export const Item1 = styled.div`
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;        /* for single line flex container */
    align-content: center;      /* for multi-line flex container */
    color: ${({theme}) => theme.colors.neutral};
    font-size:12px;
    img{
        height: 100px;
        width: 100px;
    }
    h1{
        display:inline-block;
    }
`
export const Item2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;        /* for single line flex container */
    align-content: center;      /* for multi-line flex container */
    color: ${({theme}) => theme.colors.neutral};
    grid-column: 2 / 3;

    a{
        padding:0 20px;
        color: ${({theme}) => theme.colors.neutral};
        font-size: 20px;
    }
    a:hover{
        color: ${({theme}) => theme.colors.red};
    }
`
export const Item3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;        /* for single line flex container */
    align-content: center;      /* for multi-line flex container */
    color: ${({theme}) => theme.colors.neutral};
    font-size:12px;
    grid-column: 3 / 3; 

    button{
        margin-right:10px;
        font-size:18px;
        border-radius: 5px;
    }
`
export const Row1 = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;        /* for single line flex container */
    align-content: center;      /* for multi-line flex container */
    grid-row: 2 / 2;
    grid-column: 2/2;

    input{
        width:50%;
        height: 36.5px;
        border-radius: 5px 0 0 5px;
        border:None;
        outline:None;
        padding: 10px;
    }
    button{
        font-size:15px;
        border-radius: 0 5px 5px 0;
    }
 `
