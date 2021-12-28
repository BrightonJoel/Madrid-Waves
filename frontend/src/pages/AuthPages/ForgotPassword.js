import React, { useRef } from "react"
import { useMutation } from "@apollo/client"
import {
  Label,
  Input,
  Background,
  Container,
  Wrapper,
  ErrorWrapper,
} from "./AuthPageStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { FORGOTPASSWORD } from "../../queries/Forgotquery"
export default function Forgotpassword() {
  const emailRef = useRef()

  const [
    Forgotpassword,
    { loading: sendingEmail, data: emailData, error: emailError },
  ] = useMutation(FORGOTPASSWORD)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await Forgotpassword({
        variables: {
          email: emailRef.current.value,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Background>
      <Container>
        <Wrapper>
          <h2>Reset Password</h2>
          {emailData && <ErrorWrapper> Email sent!!</ErrorWrapper>}
          {emailError && <ErrorWrapper> Account Unavailable !! </ErrorWrapper>}

          <form onSubmit={handleSubmit}>
            <Label> Registred Email</Label>
            <Input type='email' ref={emailRef} required />

            {sendingEmail ? (
              <Button
                type='submit'
                disabled={sendingEmail}
                bg={({ theme }) => theme.colors.blue}
                clr={({ theme }) => theme.colors.white}
                mt='30px'
                w='100%'
              >
                Sending mail...
              </Button>
            ) : (
              <Button
                type='submit'
                disabled={emailData}
                bg={({ theme }) => theme.colors.blue}
                clr={({ theme }) => theme.colors.white}
                mt='30px'
                w='100%'
              >
                Send mail
              </Button>
            )}
          </form>
        </Wrapper>
      </Container>
    </Background>
  )
}
