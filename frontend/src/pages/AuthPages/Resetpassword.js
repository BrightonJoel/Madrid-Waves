import React, { useRef } from "react"
import { useHistory, useLocation } from "react-router"
import {
  Label,
  Input,
  Background,
  Container,
  Wrapper,
  ErrorWrapper,
} from "./AuthPageStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { useMutation } from "@apollo/client"
import { RESETPASSWORD } from "../../queries/Forgotquery"

export default function ResetPassword() {
  const data = useLocation()
  const password = useRef()
  const confirmPassword = useRef()
  const history = useHistory()

  const [resetPassword, { loading: resettingPassword, error }] =
    useMutation(RESETPASSWORD)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await resetPassword({
        variables: {
          password: password.current.value,
          passwordConfirmation: confirmPassword.current.value,
          code: data.search.split("=")[1],
        },
      })
      history.push("/login")
    } catch (err) {
      console.log(err)
    }
  }
  if (error) {
    return (
      <Background>
        <Container>
          <Wrapper>
            <ErrorWrapper> Link expired !! </ErrorWrapper>
          </Wrapper>
        </Container>
      </Background>
    )
  }
  return (
    <Background>
      <Container>
        <Wrapper>
          <h2>Type the new password</h2>

          <form onSubmit={handleSubmit}>
            <Label> New password</Label>
            <Input type='password' ref={password} required />
            <Label> Confirm password</Label>
            <Input type='password' ref={confirmPassword} required />

            {resettingPassword ? (
              <Button
                type='submit'
                disabled={resettingPassword}
                bg={({ theme }) => theme.colors.blue}
                clr={({ theme }) => theme.colors.white}
                mt='30px'
                w='100%'
              >
                Changing password....
              </Button>
            ) : (
              <Button
                type='submit'
                // disabled={loading}
                bg={({ theme }) => theme.colors.blue}
                clr={({ theme }) => theme.colors.white}
                mt='30px'
                w='100%'
              >
                Change password
              </Button>
            )}
          </form>
        </Wrapper>
      </Container>
    </Background>
  )
}
