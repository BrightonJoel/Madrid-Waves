import styled from "styled-components"

export const Title = styled.h1`
  width: fit-content;
  background: linear-gradient(45deg, #e72142, #004797);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 20px;
`

export const MainDiv = styled.div`
  width: 1200px;
  max-width: 90%;
  margin: 50px auto;
  padding: 5px;

  h1 {
    font-size: 48px;
  }

  p,
  strong {
    font-size: 18px;
    margin: 0 10px;
  }

  textarea {
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.neutral};
    padding: 20px;
    outline: None;
    width: 100%;
    margin: 10px 0;
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 34px;
    }

    h2 {
      font-size: 28px;
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
  padding: 48px;
  border-radius: 6px;

  img {
    width: 100%;
    border-radius: 6px;
  }

  h1 {
    font-size: 42px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 32px 0;
    line-height: 1.2;
  }

  h2 {
    font-size: 34px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 24px 0;
    line-height: 1.7;
  }

  code {
    line-height: 1.5;
    padding: 3px 0;
    margin: 0;
    word-break: normal;
  }

  pre {
    background-color: #f5f5f5;
    font-size: 18px;
    border-radius: 0;
    overflow-x: auto;
  }

  th {
    text-align: center;
    font-weight: 700;
    border: 1px solid #efefef;
    padding: 10px 6px;
    background-color: #f5f7fa;
    word-break: break-word;
  }

  td,
  th {
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
  }

  ul {
    font-size: 18px;
    line-height: 28px;
    padding-left: 36px;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.7;
  }

  p {
    font-size: 18px;
    line-height: 1.7;
    margin: 8px 0;
  }

  a {
    color: #0052d9;
  }

  @media (max-width: 720px) {
    padding: 20px;
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 26px;
    }
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
