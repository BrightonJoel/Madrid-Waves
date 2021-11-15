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
    background: linear-gradient(45deg, #e72142, #004797);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
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

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const FilterPopup = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 20px;

  a {
    margin: 10px 10px;

    &.nav-active {
      color: ${({ theme }) => theme.colors.red};
      text-decoration: overline;
    }
  }
`

export const CategoryLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
