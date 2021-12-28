import React, { useRef, useState } from "react"
import { useHistory } from "react-router"

import { useAuth } from "../../context/AuthContext"

// styles
import {
  Background,
  Container,
  Wrapper,
  Label,
  Input,
  ErrorWrapper,
} from "./AuthPageStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { Link } from "react-router-dom"

export default function SignUp() {
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const { signUp } = useAuth()
  const history = useHistory()

  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setErrorMsg("Passwords did not match")
      return
    }

    const userDetails = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    setLoading(true)
    const { loading, error } = await signUp(userDetails)

    if (error) {
      setLoading(loading)
      setErrorMsg(error.message[0].messages[0].message)
      setTimeout(() => {
        setErrorMsg(false)
      }, 5000)
      return
    } else {
      setLoading(loading)
      history.push("/email-confirmation")
    }
  }

  return (
    <Background>
      <Container>
        <Wrapper>
          <h2>Sign up to Madrid waves</h2>
          {errorMsg && <ErrorWrapper>{errorMsg}</ErrorWrapper>}
          <form onSubmit={handleSubmit}>
            <Label>Username</Label>
            <Input type='text' ref={usernameRef} required />
            <Label>Email</Label>
            <Input type='email' ref={emailRef} required />
            <Label>Password</Label>
            <Input type='password' ref={passwordRef} required />
            <Label>Confirm Password</Label>
            <Input type='password' ref={passwordConfirmRef} required />

            {loading ? (
              <Button
                type='submit'
                bg={({ theme }) => theme.colors.blue}
                clr={({ theme }) => theme.colors.white}
                disabled={loading}
                mt='30px'
                w='100%'
              >
                Loading...
              </Button>
            ) : (
              <Button
                type='submit'
                bg={({ theme }) => theme.colors.blue}
                clr={({ theme }) => theme.colors.white}
                mt='30px'
                w='100%'
              >
                Create Account
              </Button>
            )}
          </form>

          <p>Already have an account?</p>
          <Link to='/login'>Login</Link>
        </Wrapper>
      </Container>
    </Background>
  )
}
