import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 768px;
  max-width: 90%;
  margin: 20px auto;
  min-height: 65vh;
  line-height: 1.7;

  h2 {
    font-size: 36px;
  }

  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  li {
    list-style: auto;
    margin: 10px 0px;
  }

  .text-container {
    background-color: ${({ theme }) => theme.colors.neutral};
    padding: 20px 40px;
    border-radius: 6px;
  }

  p {
    margin-top: 10px;
  }
`

export default function About() {
  return (
    <Container>
      <div className='text-container'>
        <h2>About Madrid Waves</h2>
        <ul>
          <li>
            The objective of the project is to create a blogging web app called
            Madrid Waves for all Madridista’s around the world
          </li>
          <li>Built with latest tech stack</li>
          <li>
            In short users can like, comment, share and create blog articles
            with ease
          </li>
          <li>
            Our motive is to make it minimalistic and to give the user a
            seamless experience across all devices
          </li>
        </ul>
        <p>
          What I feel about being a madridista is being your very best. Being
          the best of the best in all possible moments. Triving for success and
          discipline. Being great as a person, being nice and polite to everyone
          and achieving your objectives and working hard for it that's my view
          of being Royal and pure. Dressing up clean white represents a person
          who takes care of herself and has their life together. I myself am
          working for this and I'm improving myself greatly and Real Madrid has
          honestly helped me a lot. I still have much work to do before I have
          my life together but I know I'm on the correct path.
        </p>
        <h4> This website was created by Gladson and Brighton</h4>
      </div>
    </Container>
  )
}
