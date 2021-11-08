import styled from "styled-components";

export const MainDiv = styled.div`
  width: 60%;
  margin: 50px auto;
  padding: 5px;


  h1{
      font-size: 50px;
  }
  p{
      font-size: 16px;
  }
  h3{
      padding: 30px 50px 30px 0;
      font-size: 40px;
      color: ${({ theme }) => theme.colors.primaryBlue};
      display: inline-block;

  }

  h4{
    padding: 30px 50px 30px 0;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.red};
    display: inline-block;
  }
  textarea{
      border-radius: 5px;
      border-color:${({ theme }) => theme.colors.neutral};
      padding: 20px;
      outline: None;
      width: 100%;
      margin: 10px 0;
  }
  Button{
    border-radius: 5px;
    font-size: 20px;
    padding: 12px;
    float:right;
  }
  h6{
      height: 100px;
  }
  `;
export const Post = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 50px 50px 30px;
  border-radius: 5px;

  img {
    width: 100%;
    border-radius: 5px;
  }

  p {
    padding: 50px 0;
  }
`;
export const Heart = styled.div`
  color: ${({ theme }) => theme.colors.red};
  padding: 0 30px;
  font-size: 30px;
  display: inline-block;
  p {
    display: inline-block;
    font-size: 30px;
    vertical-align: middle;
    padding: 0;
  }
`;
export const Views = styled.div`
  color: ${({ theme }) => theme.colors.primaryBlue};
  padding: 0 30px;
  font-size: 35px;
  display: inline-block;
  p {
    display: inline-block;
    font-size: 30px;
    padding: 0;
    vertical-align: middle;
  }
`;
export const CommenTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 15px;
  margin: 15px 0 10px;
  display: inline-block;
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
`;

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
  p{
      padding: 20px 0;
  }
  `
  export const LikeButton = styled.div`
  
  `