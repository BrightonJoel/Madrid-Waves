import styled from "styled-components";

export const CommentBox = styled.div`
border-radius: 5px;
background-color: ${({ theme }) => theme.colors.neutral};
padding: 30px 50px;
margin-bottom:30px;


div{
    border-radius:100%;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width:50px;
    height:50px;
    display:inline-block;
}
h1{
    font-size: 20px;
    display:inline-block;
    transform: translateY(-20px);
    padding: 0 20px;
}

`