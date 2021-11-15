import styled from "styled-components"

export const Title = styled.h1`
  width: fit-content;
  background: linear-gradient(45deg, #e72142, #004797);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const MainDiv = styled.div`
  width: 1200px;
  max-width: 90%;
  margin: 50px auto;
  padding: 5px;

  h1 {
    font-size: 48px;
  }

  p {
    line-height: 1.7;
    font-size: 20px;
    margin-top: 20px;
  }

  h3 {
    padding: 30px 50px 30px 0;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primaryBlue};
    display: inline-block;
  }

  h4 {
    padding: 30px 50px 30px 0;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.red};
    display: inline-block;
  }

  textarea {
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.neutral};
    padding: 20px;
    outline: None;
    width: 100%;
    margin: 10px 0;
  }

  Button {
    border-radius: 5px;
    font-size: 20px;
    padding: 12px;
    float: right;
  }

  h6 {
    height: 100px;
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 34px;
    }
    p {
      font-size: 18px;
    }
  }
`

export const BlogHead = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 450px) {
    gap: 0;
  }
`

export const Post = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 48px 48px;
  border-radius: 5px;

  img {
    width: 100%;
    border-radius: 5px;
  }

  p {
    padding: 10px 0;
  }

  hr {
    border: 1px solid #c4c4c4;
    margin: 20px 40px;
  }

  @media (max-width: 720px) {
    padding: 20px;
  }
`

export const ViewsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 32px;
  }
`
export const CommenTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 15px;
  margin: 15px 0 10px;
  display: inline-block;
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
`

export const CommentBox = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 30px 50px;
  margin-bottom: 30px;

  div {
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 50px;
    height: 50px;
    display: inline-block;
  }
  h1 {
    font-size: 20px;
    display: inline-block;
    transform: translateY(-20px);
    padding: 0 20px;
  }
  p {
    padding: 20px 0;
  }
`
export const ActionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
`
export const Share = styled.div`
  font-size: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    font-size: 16px;
  }
`
