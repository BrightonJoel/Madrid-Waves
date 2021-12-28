import styled from "styled-components"

export const Banner = styled.div`
  margin-top: 48px;
  padding: 32px;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 45%,
    ${({ theme }) => theme.colors.banner}
  );

  @media (max-width: 768px) {
    background: none;
    margin: 0;
  }
`

export const BlogCover = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  max-width: 1240px;
  gap: 50px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const Description = styled.div``

export const Title = styled.h1`
  font-size: 42px;
  width: fit-content;
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const Container = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: 48px auto;

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
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
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
    gap: 10px;
  }
`

export const Post = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
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
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    border-radius: 0;
    overflow-x: auto;
  }

  th {
    text-align: center;
    font-weight: 700;
    border: 1px solid #efefef;
    padding: 10px 6px;
    background-color: ${({ theme }) => theme.colors.primary};
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
    color: ${({ theme }) => theme.colors.link};
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
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    transition: transform 100ms ease-in-out;
    font-size: 32px;
    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
export const CommenTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 15px;
  margin: 15px 0 10px;
  display: inline-block;
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
`

export const CommentBox = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 30px 50px;
  margin-bottom: 30px;

  div {
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
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
  // font-size: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    transition: transform 100ms ease-in-out;
    font-size: 32px;
    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  span {
    font-size: 16px;
  }
`
