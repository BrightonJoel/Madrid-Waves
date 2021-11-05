import styled from "styled-components"

export const BlogsWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.neutral};
`

export const BlogContainer = styled.div`
  margin: 48px auto;
  width: 1200px;
  max-width: 90%;
  padding: 30px 0px;
`

export const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  h2 {
    font-size: 42px;
  }

  button .filter {
    margin-left: 10px;
  }
`

export const Blog = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin: 60px 0px;
  padding: 40px;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 6px;

  h2 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.6;
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  text-align: center;
`

export const NoBlogImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0px;
  img {
    width: 40%;
    height: ${({ h }) => h};
    object-fit: cover;
    border-radius: 6px;
  }
`
