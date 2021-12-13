import React from "react"
import styled from "styled-components"
import { VscGithub } from "react-icons/vsc"

const Container = styled.div`
  width: 768px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  min-height: 700px;

  .quote-container {
    position: relative;
    z-index: 99;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 20px 0;
    padding: 20px 40px;
    border-radius: 6px;
    transition: box-shadow 100ms ease-in-out;

    h2,
    h3,
    h4 {
      background: ${({ theme }) => theme.colors.title};
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    .content {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .thumbnail {
        border-radius: 50%;
        height: 100px;
        width: 100px;
      }
    }

    .follow {
      margin-top: 32px;
      a {
        margin: 0 10px;
      }

      .follow-footer {
        margin-top: 20px;
        display: flex;
        gap: 20px;
        align-items: center;

        svg {
          font-size: 24px;
        }
      }
    }

    &:hover {
      box-shadow: 0 0 2rem ${({ theme }) => theme.colors.primary};
    }
  }
`

const BackgroundImg = styled.img`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  opacity: 0.2;
  height: 400px;
  object-fit: cover;

  @media (max-width: 600px) {
    display: none;
  }
`

export default function About() {
  return (
    <>
      <Container>
        <div className='quote-container'>
          <h2>
            “The Real Madrid shirt is white. It can stain of mud, sweat, and
            even of blood, but never of shame! Our titles give us our nobility.”
          </h2>
          <div className='content'>
            <h3>Santiago Bernabeu</h3>
            <img
              className='thumbnail'
              src='/img/Bernabeu.jpg'
              alt='Santiago Bernabeu'
            />
          </div>

          <div className='follow'>
            <h4>
              Created by
              <a href='https://github.com/Gladson-Samuel-S'>Gladson</a>
              and
              <a href='https://github.com/BrightonJoel'>Brighton</a>
            </h4>
            <div className='follow-footer'>
              <p>Follow the project on</p>
              <a href='https://github.com/Gladson-Samuel-S/Madrid-Waves'>
                <VscGithub />
              </a>
            </div>
          </div>
        </div>
        <BackgroundImg src='/img/Real-Madrid.png' alt='background' />
      </Container>
    </>
  )
}
