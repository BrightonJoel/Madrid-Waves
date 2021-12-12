import React from "react"
import {
  Background,
  Container,
  EmailImage,
  EmailContent,
} from "./AuthPageStyles"

export default function EmailConfirmation() {
  return (
    <Background>
      <Container>
        <EmailImage src='/img/email-confirmation.svg' alt='Not Found' />
        <EmailContent>
          <h2>Email Confirmation</h2>
          <p>
            You're almost ready to start enjoying Madrid Waves. Please confirm
            your account by following the instructions we have send to your mail
          </p>
        </EmailContent>
      </Container>
    </Background>
  )
}
