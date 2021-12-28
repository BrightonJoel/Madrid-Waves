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
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 30px;
  border-radius: 6px;
  transition: box-shadow 100ms ease-in-out;

  h2 {
    width: fit-content;
    background: ${({ theme }) => theme.colors.title};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 42px;
    text-align: center;
    margin: 0 auto 20px auto;
  }

  h3 {
    font-size: 24px;
    margin: 20px;
  }

  p {
    line-height: 1.6;
  }

  &:hover {
    box-shadow: 0 0 2rem ${({ theme }) => theme.colors.secondary};
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
export const YouTubeContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  padding: 30px;

  h2 {
    margin: auto;
    width: fit-content;
    background: ${({ theme }) => theme.colors.title};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 42px;
    text-align: center;
  }
`

export const VideoContainer = styled.div`
  margin: 20px 0px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 6px;
  width: 100%;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 100ms ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }
  }
`
