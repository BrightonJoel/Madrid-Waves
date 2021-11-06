import styled from "styled-components"

export const Container = styled.main`
  margin: 48px auto;
  width: 1200px;
  max-width: 90%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const LatestBlogSection = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 30px;
  border-radius: 6px;

  h2 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.6;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`
export const LaligaTable = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 6px;
  padding: 30px;

  h2 {
    font-size: 42px;
    text-align: center;
  }
`
